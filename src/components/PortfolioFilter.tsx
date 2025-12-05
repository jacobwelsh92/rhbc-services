/**
 * Premium Portfolio Filter System
 *
 * Advanced filtering for high-value customers to find relevant projects.
 * Professional interaction design with smooth animations.
 *
 * Customer Psychology:
 * - Easy to find similar projects (builds confidence)
 * - Budget range filtering (helps qualify scope)
 * - Location filtering (local experience proof)
 * - Visual feedback on filter states
 * - Clear "results found" messaging
 *
 * Technical:
 * - Real-time filtering with animations
 * - GSAP transitions between states
 * - URL parameter support (shareable filters)
 * - Mobile-optimized filter UI
 * - Debounced search input
 */

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface FilterOptions {
  category: string;
  budgetRange: string;
  location: string;
  searchQuery: string;
}

interface PortfolioFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  categories: string[];
  budgetRanges: string[];
  locations: string[];
  totalProjects: number;
  filteredCount: number;
}

export default function PortfolioFilter({
  onFilterChange,
  categories,
  budgetRanges,
  locations,
  totalProjects,
  filteredCount,
}: PortfolioFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    budgetRange: 'all',
    location: 'all',
    searchQuery: '',
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => clearTimeout(timer);
  }, [filters]);

  // Animate filter panel
  useEffect(() => {
    if (filterPanelRef.current) {
      if (isFilterOpen) {
        gsap.to(filterPanelRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(filterPanelRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [isFilterOpen]);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      budgetRange: 'all',
      location: 'all',
      searchQuery: '',
    });
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.budgetRange !== 'all' ||
    filters.location !== 'all' ||
    filters.searchQuery !== '';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
      {/* Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Browse Our Projects
          </h3>
          <p className="text-slate-600">
            Showing <span className="font-bold text-gray-900">{filteredCount}</span> of{' '}
            <span className="font-bold">{totalProjects}</span> projects
          </p>
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden btn btn-secondary flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="hidden md:flex items-center gap-2 text-gray-900 hover:text-gray-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear All Filters
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search projects by name, description, or keywords..."
            className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-slate-200 focus:border-gray-900 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Filter Panel */}
      <div
        ref={filterPanelRef}
        className="overflow-hidden md:!h-auto md:!opacity-100"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Project Type
            </label>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterChange('category', 'all')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  filters.category === 'all'
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange('category', category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    filters.category === category
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Budget Range
            </label>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterChange('budgetRange', 'all')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  filters.budgetRange === 'all'
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Budgets
              </button>
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => handleFilterChange('budgetRange', range)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    filters.budgetRange === range
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Location
            </label>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterChange('location', 'all')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  filters.location === 'all'
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Locations
              </button>
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleFilterChange('location', location)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    filters.location === location
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Clear Filters */}
        {hasActiveFilters && (
          <div className="md:hidden mt-6 pt-6 border-t border-slate-200">
            <button
              onClick={clearFilters}
              className="w-full btn btn-secondary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Active Filters Tags (Desktop) */}
      {hasActiveFilters && (
        <div className="hidden md:flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200">
          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
              {filters.category}
              <button
                onClick={() => handleFilterChange('category', 'all')}
                className="hover:text-gray-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
          {filters.budgetRange !== 'all' && (
            <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
              {filters.budgetRange}
              <button
                onClick={() => handleFilterChange('budgetRange', 'all')}
                className="hover:text-gray-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
          {filters.location !== 'all' && (
            <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
              {filters.location}
              <button
                onClick={() => handleFilterChange('location', 'all')}
                className="hover:text-gray-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
          {filters.searchQuery && (
            <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
              Search: "{filters.searchQuery}"
              <button
                onClick={() => {
                  handleFilterChange('searchQuery', '');
                  if (searchInputRef.current) searchInputRef.current.value = '';
                }}
                className="hover:text-gray-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
