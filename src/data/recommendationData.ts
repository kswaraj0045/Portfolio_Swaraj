import { RecommendationItem } from '../types/recommendations';

export const DEFAULT_CURATED_RECOMMENDATIONS: RecommendationItem[] = [
  // Movies
  {
    id: 'movie-1',
    type: 'movie',
    title: 'Interstellar',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'movie-2',
    type: 'movie',
    title: 'Oppenheimer',
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-01-15T12:00:00Z',
  },
  {
    id: 'movie-3',
    type: 'movie',
    title: 'The Social Network',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-01-20T14:30:00Z',
  },
  {
    id: 'movie-4',
    type: 'movie',
    title: 'Whiplash',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-01T09:15:00Z',
  },
  {
    id: 'movie-5',
    type: 'movie',
    title: 'Arrival',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-10T16:00:00Z',
  },
  {
    id: 'movie-6',
    type: 'movie',
    title: 'Blade Runner 2049',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-18T18:45:00Z',
  },

  // Music
  {
    id: 'music-1',
    type: 'song',
    title: 'Starboy — The Weeknd',
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-01-12T11:00:00Z',
  },
  {
    id: 'music-2',
    type: 'song',
    title: 'Random Access Memories — Daft Punk',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-01-18T15:00:00Z',
  },
  {
    id: 'music-3',
    type: 'song',
    title: 'After Hours — The Weeknd',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-05T13:20:00Z',
  },
  {
    id: 'music-4',
    type: 'song',
    title: 'Nightcall — Kavinsky',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-14T20:10:00Z',
  },
  {
    id: 'music-5',
    type: 'song',
    title: 'Viva La Vida — Coldplay',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-22T08:00:00Z',
  },
  {
    id: 'music-6',
    type: 'song',
    title: 'Midnight City — M83',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    source: 'curated',
    status: 'approved',
    createdAt: '2026-02-28T19:30:00Z',
  },
];

export const DEFAULT_COMMUNITY_RECOMMENDATIONS: RecommendationItem[] = [
  {
    id: 'community-1',
    type: 'movie',
    title: 'Inception',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Aarav',
    status: 'approved',
    createdAt: '2026-03-01T14:00:00Z',
  },
  {
    id: 'community-2',
    type: 'song',
    title: 'Clocks — Coldplay',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Dev',
    status: 'approved',
    createdAt: '2026-03-02T16:30:00Z',
  },
  {
    id: 'community-3',
    type: 'movie',
    title: 'Dune: Part Two',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Priya',
    status: 'approved',
    createdAt: '2026-03-03T11:20:00Z',
  },
  {
    id: 'community-4',
    type: 'song',
    title: 'Get Lucky — Daft Punk',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Sam',
    status: 'approved',
    createdAt: '2026-03-04T18:00:00Z',
  },
  // Pending queue item for admin demonstration
  {
    id: 'community-pending-1',
    type: 'movie',
    title: 'The Dark Knight',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Rohan',
    status: 'pending',
    createdAt: '2026-03-05T09:45:00Z',
  },
  {
    id: 'community-pending-2',
    type: 'song',
    title: 'Time — Hans Zimmer',
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80',
    source: 'community',
    submittedBy: 'Ananya',
    status: 'pending',
    createdAt: '2026-03-05T10:15:00Z',
  },
];

const CURATED_STORAGE_KEY = 'swaraj_recommendations_curated_v1';
const COMMUNITY_STORAGE_KEY = 'swaraj_recommendations_community_v1';

export const RecommendationService = {
  getCuratedRecommendations: (): RecommendationItem[] => {
    try {
      const stored = localStorage.getItem(CURATED_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read curated recommendations from localStorage', e);
    }
    return DEFAULT_CURATED_RECOMMENDATIONS;
  },

  saveCuratedRecommendations: (items: RecommendationItem[]): void => {
    try {
      localStorage.setItem(CURATED_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save curated recommendations to localStorage', e);
    }
  },

  getCommunityRecommendations: (): RecommendationItem[] => {
    try {
      const stored = localStorage.getItem(COMMUNITY_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read community recommendations from localStorage', e);
    }
    return DEFAULT_COMMUNITY_RECOMMENDATIONS;
  },

  saveCommunityRecommendations: (items: RecommendationItem[]): void => {
    try {
      localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save community recommendations to localStorage', e);
    }
  },

  addCommunitySubmission: (submission: {
    type: 'movie' | 'song';
    title: string;
    submittedBy?: string;
    imageUrl?: string;
  }): RecommendationItem => {
    const defaultPlaceholder = submission.type === 'movie'
      ? 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';

    const newItem: RecommendationItem = {
      id: `community-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      type: submission.type,
      title: submission.title.trim(),
      imageUrl: submission.imageUrl?.trim() || defaultPlaceholder,
      source: 'community',
      submittedBy: submission.submittedBy?.trim() || 'Anonymous Friend',
      status: 'pending', // Pending approval queue
      createdAt: new Date().toISOString(),
    };

    const current = RecommendationService.getCommunityRecommendations();
    const updated = [newItem, ...current];
    RecommendationService.saveCommunityRecommendations(updated);
    return newItem;
  },

  approveSubmission: (id: string): void => {
    const current = RecommendationService.getCommunityRecommendations();
    const updated = current.map((item) =>
      item.id === id ? { ...item, status: 'approved' as const } : item
    );
    RecommendationService.saveCommunityRecommendations(updated);
  },

  rejectSubmission: (id: string): void => {
    const current = RecommendationService.getCommunityRecommendations();
    const updated = current.filter((item) => item.id !== id);
    RecommendationService.saveCommunityRecommendations(updated);
  },

  resetToDefaults: (): void => {
    try {
      localStorage.removeItem(CURATED_STORAGE_KEY);
      localStorage.removeItem(COMMUNITY_STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to reset storage', e);
    }
  },
};

