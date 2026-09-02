import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Map, 
  Search, 
  Home, 
  Truck, 
  Package, 
  Wrench, 
  Car, 
  Key, 
  Battery, 
  BookOpen, 
  ShieldCheck, 
  MapPin, 
  Navigation,
  FileCode,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  Filter,
  Layers,
  LayoutGrid,
  List,
  CheckCircle2,
  ExternalLink,
  Hash
} from 'lucide-react';
import { SITEMAP_CATEGORIES, SitemapCategory, SitemapLink } from '../data/sitemapData';

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Truck,
  Container: Package,
  Wrench,
  Car,
  Key,
  Battery,
  BookOpen,
  ShieldCheck,
  MapPin,
  Navigation
};

export default function Sitemap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    main: true,
    towing: true,
    haulage: true,
    services: true,
    sales: true,
    rental: true,
    parts: true,
    blog: true,
    legal: true,
    'local-areas': true,
    corridors: true
  });

  // Calculate global start & end indices for each category in the static sitemap hierarchy
  const categoryRanges = useMemo(() => {
    const ranges: Record<string, { start: number; end: number; count: number; code: string; number: number }> = {};
    let currentCount = 0;

    SITEMAP_CATEGORIES.forEach(cat => {
      const start = currentCount + 1;
      const count = cat.links.length;
      const end = currentCount + count;
      currentCount = end;

      ranges[cat.id] = {
        start,
        end,
        count,
        code: cat.code,
        number: cat.categoryNumber
      };
    });

    return ranges;
  }, []);

  const totalLinksCount = useMemo(() => {
    return SITEMAP_CATEGORIES.reduce((acc, cat) => acc + cat.links.length, 0);
  }, []);

  // Pre-calculate global sequential number and hierarchical ID for every link in SITEMAP_CATEGORIES
  const enrichedCategories = useMemo(() => {
    let globalCounter = 0;

    return SITEMAP_CATEGORIES.map(cat => {
      const enrichedLinks = cat.links.map((link, linkIdx) => {
        globalCounter++;
        return {
          ...link,
          globalNumber: globalCounter,
          hierarchicalId: `${cat.code}.${linkIdx + 1}`,
          categoryCode: cat.code,
          categoryNumber: cat.categoryNumber,
          categoryTitle: cat.title,
          categoryIndex: linkIdx + 1
        };
      });

      return {
        ...cat,
        enrichedLinks
      };
    });
  }, []);

  // Filtered categories based on search query and category filter
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return enrichedCategories.map(cat => {
      // Category filter check
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return null;
      }

      if (!q) {
        return cat;
      }

      // Filter links within category
      const matchedLinks = cat.enrichedLinks.filter(link => 
        link.label.toLowerCase().includes(q) || 
        link.path.toLowerCase().includes(q) ||
        link.hierarchicalId.toLowerCase().includes(q) ||
        String(link.globalNumber) === q ||
        `#${link.globalNumber}` === q ||
        (link.desc && link.desc.toLowerCase().includes(q))
      );

      // If category title matches query, return all links or matched links
      const catTitleMatch = cat.title.toLowerCase().includes(q) || 
                            cat.description.toLowerCase().includes(q) ||
                            `category ${cat.code.toLowerCase()}`.includes(q);

      if (matchedLinks.length > 0) {
        return {
          ...cat,
          enrichedLinks: matchedLinks
        };
      }

      if (catTitleMatch) {
        return cat;
      }

      return null;
    }).filter((cat): cat is (typeof enrichedCategories)[0] => cat !== null);
  }, [searchQuery, selectedCategory, enrichedCategories]);

  const totalMatchedLinks = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.enrichedLinks.length, 0);
  }, [filteredCategories]);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    SITEMAP_CATEGORIES.forEach(c => { all[c.id] = true; });
    setExpandedSections(all);
  };

  const collapseAll = () => {
    const none: Record<string, boolean> = {};
    SITEMAP_CATEGORIES.forEach(c => { none[c.id] = false; });
    setExpandedSections(none);
  };

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <SEO 
        title="Numbered Website Sitemap & Directory | Santa Towing Ghana" 
        description="Comprehensive, numbered website directory of Santa Towing Ghana. Access all 338 indexed pages across 11 structured categories from emergency towing and heavy haulage to nationwide transit corridors." 
        canonical="/sitemap" 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Website Sitemap' }]} />
        </div>

        {/* Hero Header Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                Numbered Website Hierarchy
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white">
                <Hash className="w-3 h-3 text-accent" />
                {totalLinksCount} Sequentially Numbered Pages
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                11 Categories (A – K)
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Active Routes
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-accent/20">
                    <Map className="w-6 h-6" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Website Sitemap
                  </h1>
                </div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-2">
                  Explore every publicly accessible page on Santa Towing. Each category is labeled alphabetically (<strong>Category A – K</strong>) and sequentially numbered (<strong>Page #1 to #{totalLinksCount}</strong>) for transparent indexing and easy navigation.
                </p>
              </div>

              {/* Action Buttons & XML Sitemap */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-accent transition-colors shadow-sm"
                  title="Open Search Engine XML Sitemap"
                >
                  <FileCode className="w-4 h-4 text-accent" />
                  <span>XML Sitemap</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors shadow-sm shadow-accent/20"
                >
                  <Truck className="w-4 h-4" />
                  <span>Book Service</span>
                </Link>
              </div>
            </div>

            {/* Category Quick Index Overview Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Quick Category Directory (A – K):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                {SITEMAP_CATEGORIES.map(cat => {
                  const range = categoryRanges[cat.id];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className="p-2 rounded-xl bg-slate-50 hover:bg-accent/10 hover:border-accent/30 border border-slate-200/80 text-left transition-all group"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-mono font-bold text-accent group-hover:text-accent text-[11px]">
                          Category {cat.code}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          #{range.start}–#{range.end}
                        </span>
                      </div>
                      <div className="font-semibold text-slate-800 text-[12px] truncate group-hover:text-slate-900">
                        {cat.title.split('&')[0].trim()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Search Bar & View Mode Controls */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by page name, category code (e.g. A.1, K.50), page # (e.g. #24), or keyword..."
                  className="w-full pl-11 pr-10 py-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* View Mode & Expand Controls */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
                {/* View Mode Toggle */}
                <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      viewMode === 'grid'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Grid Card View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Grid View</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      viewMode === 'table'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Compact Table / List View"
                  >
                    <List className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Table View</span>
                  </button>
                </div>

                <button
                  onClick={expandAll}
                  className="text-xs font-semibold text-slate-600 hover:text-accent px-3 py-2 bg-slate-100 hover:bg-slate-200/70 rounded-lg transition-colors"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="text-xs font-semibold text-slate-600 hover:text-accent px-3 py-2 bg-slate-100 hover:bg-slate-200/70 rounded-lg transition-colors"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Category Quick Filter Pills */}
            <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              <span className="flex items-center gap-1 font-bold text-slate-500 uppercase tracking-wider text-[11px] shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-full font-semibold shrink-0 transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                All Categories ({totalLinksCount})
              </button>
              {SITEMAP_CATEGORIES.map(cat => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                    className={`px-3 py-1.5 rounded-full font-medium shrink-0 transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-accent text-white shadow-sm shadow-accent/20 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    <span className="font-mono font-bold opacity-80">{cat.code}.</span>
                    <span>{cat.title.split('&')[0].trim()}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                      {cat.links.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 px-2 flex items-center justify-between text-sm text-slate-600 bg-white p-4 rounded-2xl border border-slate-200">
            <p>
              Found <strong className="text-slate-900 font-bold">{totalMatchedLinks}</strong> matching pages for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-accent hover:underline font-bold text-xs"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Categories Listing */}
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No matching pages found</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">
              We couldn't find any pages matching "{searchQuery}". Try a keyword like "Kumasi", "Towing", "Rentals", "Haulage", or an index like "A.1" or "#50".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-5 py-2.5 bg-accent text-white font-bold rounded-xl text-sm hover:bg-accent/90 transition-colors"
            >
              Show All 338 Website Pages
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((category) => {
              const IconComponent = ICON_MAP[category.iconName] || MapPin;
              const isExpanded = expandedSections[category.id] ?? true;
              const range = categoryRanges[category.id];

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  {/* Category Header with Clear Alphabetical & Numbered Heading */}
                  <div 
                    onClick={() => toggleSection(category.id)}
                    className="p-5 sm:p-7 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100/60 transition-colors select-none"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 text-accent flex items-center justify-center shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Category Tag (A, B, C...) */}
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-mono font-black bg-accent text-white shadow-xs">
                            Category {category.code}
                          </span>
                          
                          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                            {category.title}
                          </h2>

                          {category.badge && (
                            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent">
                              {category.badge}
                            </span>
                          )}

                          {/* Page Range Badge */}
                          <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 font-mono">
                            Pages #{range.start} – #{range.end} ({category.enrichedLinks.length} {category.enrichedLinks.length === 1 ? 'entry' : 'entries'})
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <button 
                      className="text-slate-400 hover:text-slate-700 p-2 rounded-lg transition-colors shrink-0 ml-2"
                      aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Links Content */}
                  {isExpanded && (
                    <div className="p-5 sm:p-8">
                      {viewMode === 'grid' ? (
                        /* Card Grid View with Hierarchical and Sequential Numbering */
                        <ul 
                          className={`grid grid-cols-1 ${
                            category.enrichedLinks.length > 20 
                              ? 'md:grid-cols-2 lg:grid-cols-3' 
                              : category.enrichedLinks.length > 6 
                              ? 'md:grid-cols-2' 
                              : 'grid-cols-1'
                          } gap-3.5 sm:gap-4`}
                        >
                          {category.enrichedLinks.map((link) => (
                            <li key={link.path + link.label + link.globalNumber}>
                              <Link
                                to={link.path}
                                className="group block p-4 rounded-xl border border-slate-100 hover:border-accent/40 bg-white hover:bg-slate-50/90 transition-all duration-150 h-full flex flex-col justify-between shadow-xs hover:shadow-sm"
                              >
                                <div>
                                  {/* Entry Identification Header: Hierarchy Code & Global Number */}
                                  <div className="flex items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-1.5">
                                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-900 text-accent font-mono font-bold text-xs">
                                        {link.hierarchicalId}
                                      </span>
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[11px]">
                                        #{link.globalNumber}
                                      </span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                  </div>

                                  {/* Page Title */}
                                  <h3 className="font-bold text-sm sm:text-[15px] text-slate-900 group-hover:text-accent transition-colors leading-snug">
                                    {link.label}
                                  </h3>
                                  
                                  {/* Page Description */}
                                  {link.desc && (
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-1.5">
                                      {link.desc}
                                    </p>
                                  )}
                                </div>

                                {/* URL Path and Visit CTA */}
                                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                                  <span className="font-mono text-slate-400 group-hover:text-slate-600 transition-colors truncate max-w-[200px]">
                                    {link.path}
                                  </span>
                                  <span className="text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                                    Open &rarr;
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        /* Compact Numbered Table View */
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                          <table className="w-full text-left border-collapse text-sm">
                            <thead>
                              <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                                <th className="py-3 px-3 w-16 text-center">Code</th>
                                <th className="py-3 px-3 w-16 text-center">No.</th>
                                <th className="py-3 px-4">Page Title & Description</th>
                                <th className="py-3 px-4 hidden md:table-cell">URL Route</th>
                                <th className="py-3 px-3 text-right">Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {category.enrichedLinks.map((link) => (
                                <tr 
                                  key={link.path + link.label + link.globalNumber}
                                  className="hover:bg-slate-50/80 transition-colors group"
                                >
                                  <td className="py-3 px-3 text-center">
                                    <span className="inline-block px-2 py-0.5 rounded bg-slate-900 text-accent font-mono font-bold text-xs">
                                      {link.hierarchicalId}
                                    </span>
                                  </td>
                                  <td className="py-3 px-3 text-center font-mono text-xs font-semibold text-slate-500">
                                    #{link.globalNumber}
                                  </td>
                                  <td className="py-3 px-4">
                                    <Link 
                                      to={link.path}
                                      className="font-bold text-slate-900 group-hover:text-accent transition-colors block text-sm"
                                    >
                                      {link.label}
                                    </Link>
                                    {link.desc && (
                                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                        {link.desc}
                                      </p>
                                    )}
                                  </td>
                                  <td className="py-3 px-4 hidden md:table-cell font-mono text-xs text-slate-400 group-hover:text-slate-600">
                                    {link.path}
                                  </td>
                                  <td className="py-3 px-3 text-right">
                                    <Link
                                      to={link.path}
                                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 group-hover:bg-accent group-hover:text-white text-slate-700 transition-all"
                                    >
                                      <span>Visit</span>
                                      <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* Quick Dispatch Call-to-Action Footer Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Need Immediate Roadside or Heavy Haulage Dispatch?</h3>
          <p className="text-sm text-slate-600 mb-5 max-w-2xl mx-auto">
            Our 24/7 dispatch control center is on standby across Greater Accra, Ashanti, Western, Central, Eastern, and all 16 regions of Ghana.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="tel:0244753849" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-all shadow-md shadow-accent/20"
            >
              <Truck className="w-4 h-4" />
              <span>Call Emergency Hotline: 0244753849</span>
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Contact Dispatch Center</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
