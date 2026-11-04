export type RecommendationType = 'movie' | 'song';

export interface RecommendationItem {
  id: string;
  type: RecommendationType;
  title: string;
  imageUrl: string;
  source: 'curated' | 'community';
  submittedBy?: string;
  status: 'approved' | 'pending';
  createdAt: string;
}

export type RecommendationTab = 'my-picks' | 'community-picks';

