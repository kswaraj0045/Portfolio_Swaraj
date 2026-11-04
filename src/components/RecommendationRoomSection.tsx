import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film, 
  Music2, 
  Plus, 
  Sparkles, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  X, 
  Check, 
  Trash2, 
  Edit3, 
  Inbox,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { RecommendationCard } from './RecommendationCard';
import { 
  RecommendationItem, 
  RecommendationTab, 
  RecommendationType 
} from '../types/recommendations';
import { 
  RecommendationService 
} from '../data/recommendationData';

interface Props {
  onNavigate?: (path: string) => void;
}

export const RecommendationRoomSection: React.FC<Props> = ({ onNavigate }) => {
  // Navigation & Tabs
  const [activeTab, setActiveTab] = useState<RecommendationTab>('my-picks');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | 'movie' | 'song'>('all');

  // Recommendation Data State
  const [curatedList, setCuratedList] = useState<RecommendationItem[]>([]);
  const [communityList, setCommunityList] = useState<RecommendationItem[]>([]);

  // Modals
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('swaraj_admin_auth') === 'true';
  });
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminAuthError, setAdminAuthError] = useState('');
  const [adminActiveTab, setAdminActiveTab] = useState<'pending' | 'add'>('pending');

  // Visitor Submission Form State
  const [submitType, setSubmitType] = useState<RecommendationType>('movie');
  const [submitTitle, setSubmitTitle] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [submitImageUrl, setSubmitImageUrl] = useState('');

  // Admin Edit/Add Form State
  const [editingItem, setEditingItem] = useState<RecommendationItem | null>(null);
  const [curatedType, setCuratedType] = useState<RecommendationType>('movie');
  const [curatedTitle, setCuratedTitle] = useState('');
  const [curatedImageUrl, setCuratedImageUrl] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setCuratedList(RecommendationService.getCuratedRecommendations());
    setCommunityList(RecommendationService.getCommunityRecommendations());
  };

  // Filter approved items
  const approvedCommunity = communityList.filter((item) => item.status === 'approved');
  const pendingCommunity = communityList.filter((item) => item.status === 'pending');

  const currentDisplayList = activeTab === 'my-picks' ? curatedList : approvedCommunity;
  const filteredList = selectedTypeFilter === 'all' 
    ? currentDisplayList 
    : currentDisplayList.filter((item) => item.type === selectedTypeFilter);

  // Visitor Submission Handler
  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitTitle.trim()) return;

    RecommendationService.addCommunitySubmission({
      type: submitType,
      title: submitTitle,
      submittedBy: submitName,
      imageUrl: submitImageUrl,
    });

    loadData();
    setSubmitTitle('');
    setSubmitName('');
    setSubmitImageUrl('');
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setShowSubmitModal(false);
    }, 2000);
  };

  // Admin Authentication Handler (Default passcode: swaraj)
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPinInput.trim().toLowerCase() === 'swaraj' || adminPinInput.trim() === '1204') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('swaraj_admin_auth', 'true');
      setAdminAuthError('');
      setAdminPinInput('');
    } else {
      setAdminAuthError('Incorrect passcode. Try: swaraj');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('swaraj_admin_auth');
    setShowAdminModal(false);
  };

  // Admin Approve / Reject Submissions
  const handleApprove = (id: string) => {
    RecommendationService.approveSubmission(id);
    loadData();
  };

  const handleReject = (id: string) => {
    RecommendationService.rejectSubmission(id);
    loadData();
  };

  // Admin Curated Add / Edit
  const handleSaveCurated = (e: React.FormEvent) => {
    e.preventDefault();
    if (!curatedTitle.trim()) return;

    const defaultImage = curatedType === 'movie'
      ? 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';

    if (editingItem) {
      // Edit existing
      const updated = curatedList.map((item) => 
        item.id === editingItem.id 
          ? {
              ...item,
              title: curatedTitle.trim(),
              type: curatedType,
              imageUrl: curatedImageUrl.trim() || item.imageUrl,
            }
          : item
      );
      RecommendationService.saveCuratedRecommendations(updated);
      setEditingItem(null);
    } else {
      // Add new
      const newItem: RecommendationItem = {
        id: `curated-${Date.now()}`,
        type: curatedType,
        title: curatedTitle.trim(),
        imageUrl: curatedImageUrl.trim() || defaultImage,
        source: 'curated',
        status: 'approved',
        createdAt: new Date().toISOString(),
      };
      const updated = [newItem, ...curatedList];
      RecommendationService.saveCuratedRecommendations(updated);
    }

    setCuratedTitle('');
    setCuratedImageUrl('');
    loadData();
  };

  const handleEditCurated = (item: RecommendationItem) => {
    setEditingItem(item);
    setCuratedTitle(item.title);
    setCuratedType(item.type);
    setCuratedImageUrl(item.imageUrl);
    setShowAdminModal(true);
    setAdminActiveTab('add');
  };

  const handleDeleteCurated = (id: string) => {
    const updated = curatedList.filter((item) => item.id !== id);
    RecommendationService.saveCuratedRecommendations(updated);
    loadData();
  };

  return (
    <section id="recommendations" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#111317]/50 to-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B32635]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#527DAA]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER & TAGLINE */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B32635]/10 border border-[#B32635]/30 text-xs font-mono font-medium text-[#B32635]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE RECOMMENDATION ROOM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#F5F5F5] tracking-tight">
            Curated Cinema &amp; Sound
          </h2>

          <p className="text-lg sm:text-xl font-heading font-medium text-[#C5C8CE] italic">
            &ldquo;Good taste is meant to be shared.&rdquo;
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-semibold text-white bg-[#B32635] hover:bg-[#D13A49] transition-all shadow-[0_4px_20px_rgba(179,38,53,0.35)] cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Share a Recommendation</span>
            </button>

            {onNavigate && (
              <button
                onClick={() => onNavigate('/recommendations')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-[#C5C8CE] hover:text-white bg-[#17191D] border border-[#35383F] hover:border-[#B32635]/60 transition-all cursor-pointer"
              >
                <span>Dedicated View</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B32635]" />
              </button>
            )}

            <button
              onClick={() => setShowAdminModal(true)}
              className={`p-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border cursor-pointer ${
                isAdminAuthenticated
                  ? 'bg-[#B32635]/15 border-[#B32635]/50 text-[#F5F5F5]'
                  : 'bg-[#17191D] border-[#35383F] text-[#858992] hover:text-[#C5C8CE]'
              }`}
              title={isAdminAuthenticated ? 'Admin Panel Active' : 'Admin Access'}
            >
              {isAdminAuthenticated ? (
                <>
                  <Unlock className="w-4 h-4 text-[#B32635]" />
                  <span className="text-xs">Admin Mode</span>
                  {pendingCommunity.length > 0 && (
                    <span className="w-2 h-2 rounded-full bg-[#B32635] animate-pulse" />
                  )}
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-[#858992]" />
                  <span className="text-xs">Admin</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* NAVIGATION TABS: MY PICKS & COMMUNITY PICKS */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#35383F]/70 pb-5 mb-8">
          
          {/* Main Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#17191D] border border-[#35383F]">
            <button
              onClick={() => setActiveTab('my-picks')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer ${
                activeTab === 'my-picks'
                  ? 'bg-[#B32635] text-white shadow-sm'
                  : 'text-[#C5C8CE] hover:text-white'
              }`}
            >
              My Picks ({curatedList.length})
            </button>

            <button
              onClick={() => setActiveTab('community-picks')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer ${
                activeTab === 'community-picks'
                  ? 'bg-[#B32635] text-white shadow-sm'
                  : 'text-[#C5C8CE] hover:text-white'
              }`}
            >
              Community Picks ({approvedCommunity.length})
            </button>
          </div>

          {/* Simple Type Filter (All / Movies / Music) */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <button
              onClick={() => setSelectedTypeFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedTypeFilter === 'all'
                  ? 'bg-[#202329] border-[#C5C8CE] text-white'
                  : 'bg-[#17191D] border-[#35383F] text-[#858992] hover:text-[#C5C8CE]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedTypeFilter('movie')}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedTypeFilter === 'movie'
                  ? 'bg-[#202329] border-[#B32635] text-white'
                  : 'bg-[#17191D] border-[#35383F] text-[#858992] hover:text-[#C5C8CE]'
              }`}
            >
              <Film className="w-3 h-3 text-[#B32635]" />
              <span>Movies</span>
            </button>
            <button
              onClick={() => setSelectedTypeFilter('song')}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedTypeFilter === 'song'
                  ? 'bg-[#202329] border-[#527DAA] text-white'
                  : 'bg-[#17191D] border-[#35383F] text-[#858992] hover:text-[#C5C8CE]'
              }`}
            >
              <Music2 className="w-3 h-3 text-[#527DAA]" />
              <span>Music</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PUBLIC DISPLAY GRID */}
        {/* ========================================================= */}
        {filteredList.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#17191D] border border-[#35383F]/60 max-w-lg mx-auto space-y-3">
            <Inbox className="w-8 h-8 text-[#858992] mx-auto" />
            <h3 className="text-base font-heading font-semibold text-[#F5F5F5]">
              No recommendations found
            </h3>
            <p className="text-xs text-[#858992]">
              {activeTab === 'community-picks'
                ? 'Be the first to share a recommendation in this category!'
                : 'No curated items available.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {filteredList.map((item) => (
              <RecommendationCard
                key={item.id}
                item={item}
                isAdmin={isAdminAuthenticated && activeTab === 'my-picks'}
                onEdit={handleEditCurated}
                onDelete={handleDeleteCurated}
              />
            ))}
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* VISITOR SUBMISSION MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md rounded-2xl bg-[#17191D] border border-[#35383F] shadow-2xl p-6 relative overflow-hidden space-y-5"
            >
              <div className="flex items-center justify-between border-b border-[#35383F]/70 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B32635]" />
                  <h3 className="font-heading font-semibold text-base text-[#F5F5F5]">
                    Share a Recommendation
                  </h3>
                </div>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-[#858992] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submissionSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#86BC25] mx-auto animate-bounce" />
                  <h4 className="font-heading font-semibold text-lg text-white">
                    Recommendation Submitted!
                  </h4>
                  <p className="text-xs text-[#C5C8CE]">
                    Your recommendation has entered the approval queue and will appear under Community Picks once approved.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVisitorSubmit} className="space-y-4">
                  {/* Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5 uppercase">
                      Category
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSubmitType('movie')}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          submitType === 'movie'
                            ? 'bg-[#B32635]/15 border-[#B32635] text-white font-semibold'
                            : 'bg-[#111317] border-[#35383F] text-[#858992]'
                        }`}
                      >
                        <Film className="w-3.5 h-3.5 text-[#B32635]" />
                        <span>Movie</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitType('song')}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          submitType === 'song'
                            ? 'bg-[#527DAA]/15 border-[#527DAA] text-white font-semibold'
                            : 'bg-[#111317] border-[#35383F] text-[#858992]'
                        }`}
                      >
                        <Music2 className="w-3.5 h-3.5 text-[#527DAA]" />
                        <span>Song / Music</span>
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5 uppercase">
                      Title <span className="text-[#B32635]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={submitType === 'movie' ? 'e.g., The Prestige' : 'e.g., Heroes — David Bowie'}
                      value={submitTitle}
                      onChange={(e) => setSubmitTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-sm text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635] transition-colors"
                    />
                  </div>

                  {/* Name or Nickname (Optional) */}
                  <div>
                    <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5 uppercase">
                      Your Name or Nickname <span className="text-[#858992] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Cinephile or Jane"
                      value={submitName}
                      onChange={(e) => setSubmitName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-sm text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635] transition-colors"
                    />
                  </div>

                  {/* Image URL (Optional) */}
                  <div>
                    <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5 uppercase">
                      Artwork / Poster URL <span className="text-[#858992] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://... (defaults to high-res poster placeholder if blank)"
                      value={submitImageUrl}
                      onChange={(e) => setSubmitImageUrl(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-xs font-mono text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#B32635] hover:bg-[#D13A49] text-white font-heading font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Submit for Approval</span>
                    </button>
                    <p className="text-[11px] text-center text-[#858992] mt-2">
                      Submissions enter Swaraj&apos;s queue and go live upon approval.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* ADMIN CONTROL MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showAdminModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-2xl bg-[#17191D] border border-[#35383F] shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#35383F]/70 pb-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#B32635]" />
                  <h3 className="font-heading font-semibold text-base text-[#F5F5F5]">
                    Recommendation Room Admin Interface
                  </h3>
                </div>
                <button
                  onClick={() => setShowAdminModal(false)}
                  className="text-[#858992] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isAdminAuthenticated ? (
                /* Admin Login Prompt */
                <form onSubmit={handleAdminLogin} className="space-y-4 py-4 max-w-sm mx-auto">
                  <div className="text-center space-y-1">
                    <p className="text-sm text-[#C5C8CE]">
                      Enter admin passcode to manage recommendations and approvals.
                    </p>
                  </div>

                  <div>
                    <input
                      type="password"
                      autoFocus
                      required
                      placeholder="Enter passcode (e.g., swaraj)"
                      value={adminPinInput}
                      onChange={(e) => setAdminPinInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-sm text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635] text-center tracking-widest"
                    />
                    {adminAuthError && (
                      <p className="text-xs text-[#D13A49] mt-1.5 text-center flex items-center justify-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{adminAuthError}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#B32635] hover:bg-[#D13A49] text-white font-heading font-semibold text-sm transition-all cursor-pointer"
                  >
                    Unlock Admin Mode
                  </button>
                </form>
              ) : (
                /* Authenticated Admin Management Panels */
                <div className="space-y-6">
                  {/* Admin Sub-Tabs */}
                  <div className="flex items-center justify-between border-b border-[#35383F]/70 pb-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAdminActiveTab('pending')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                          adminActiveTab === 'pending'
                            ? 'bg-[#B32635] text-white font-semibold'
                            : 'bg-[#111317] text-[#C5C8CE] hover:text-white'
                        }`}
                      >
                        <span>Pending Approvals</span>
                        <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">
                          {pendingCommunity.length}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setAdminActiveTab('add');
                          setEditingItem(null);
                          setCuratedTitle('');
                          setCuratedImageUrl('');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                          adminActiveTab === 'add'
                            ? 'bg-[#B32635] text-white font-semibold'
                            : 'bg-[#111317] text-[#C5C8CE] hover:text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{editingItem ? 'Edit Pick' : 'Add My Pick'}</span>
                      </button>
                    </div>

                    <button
                      onClick={handleAdminLogout}
                      className="text-xs font-mono text-[#858992] hover:text-[#D13A49] transition-colors cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>

                  {/* Panel 1: Pending Approvals Queue */}
                  {adminActiveTab === 'pending' && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-[#C5C8CE] uppercase tracking-wider">
                        Pending Community Submissions ({pendingCommunity.length})
                      </h4>

                      {pendingCommunity.length === 0 ? (
                        <div className="p-8 text-center rounded-xl bg-[#111317] border border-[#35383F]/50 text-xs text-[#858992]">
                          No pending submissions. All clean!
                        </div>
                      ) : (
                        <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                          {pendingCommunity.map((item) => (
                            <div
                              key={item.id}
                              className="p-3.5 rounded-xl bg-[#111317] border border-[#35383F] flex items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className="w-10 h-10 rounded object-cover shrink-0 bg-[#202329]"
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#202329] text-[#C5C8CE]">
                                      {item.type}
                                    </span>
                                    <span className="text-xs font-semibold text-white truncate">
                                      {item.title}
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-[#858992]">
                                    Submitted by: <span className="text-[#C5C8CE]">{item.submittedBy || 'Anonymous'}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => handleApprove(item.id)}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#86BC25]/20 hover:bg-[#86BC25] text-[#86BC25] hover:text-black font-mono text-xs transition-colors flex items-center gap-1 cursor-pointer"
                                  title="Approve and make public"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Approve</span>
                                </button>
                                <button
                                  onClick={() => handleReject(item.id)}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#D13A49]/20 hover:bg-[#D13A49] text-[#D13A49] hover:text-white font-mono text-xs transition-colors flex items-center gap-1 cursor-pointer"
                                  title="Reject and delete"
                                >
                                  <X className="w-3.5 h-3.5" />
                                  <span>Reject</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Panel 2: Add or Edit My Pick */}
                  {adminActiveTab === 'add' && (
                    <form onSubmit={handleSaveCurated} className="space-y-4">
                      <h4 className="text-xs font-mono text-[#C5C8CE] uppercase tracking-wider">
                        {editingItem ? 'Edit My Recommendation' : 'Add to My Recommendations'}
                      </h4>

                      <div>
                        <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5">
                          TYPE
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setCuratedType('movie')}
                            className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 ${
                              curatedType === 'movie'
                                ? 'bg-[#B32635]/20 border-[#B32635] text-white font-semibold'
                                : 'bg-[#111317] border-[#35383F] text-[#858992]'
                            }`}
                          >
                            <Film className="w-3.5 h-3.5 text-[#B32635]" />
                            <span>Movie</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCuratedType('song')}
                            className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 ${
                              curatedType === 'song'
                                ? 'bg-[#527DAA]/20 border-[#527DAA] text-white font-semibold'
                                : 'bg-[#111317] border-[#35383F] text-[#858992]'
                            }`}
                          >
                            <Music2 className="w-3.5 h-3.5 text-[#527DAA]" />
                            <span>Music</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5">
                          TITLE *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={curatedType === 'movie' ? 'Movie Title' : 'Song Title — Artist'}
                          value={curatedTitle}
                          onChange={(e) => setCuratedTitle(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-sm text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#C5C8CE] mb-1.5">
                          POSTER / ARTWORK IMAGE URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://... (direct image URL)"
                          value={curatedImageUrl}
                          onChange={(e) => setCuratedImageUrl(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-xs font-mono text-[#F5F5F5] placeholder-[#858992] focus:outline-none focus:border-[#B32635]"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="submit"
                          className="flex-1 py-2.5 rounded-xl bg-[#B32635] hover:bg-[#D13A49] text-white font-heading font-semibold text-sm transition-all cursor-pointer"
                        >
                          {editingItem ? 'Save Changes' : 'Add to My Picks'}
                        </button>
                        {editingItem && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingItem(null);
                              setCuratedTitle('');
                              setCuratedImageUrl('');
                            }}
                            className="px-4 py-2.5 rounded-xl bg-[#111317] border border-[#35383F] text-xs font-mono text-[#858992] hover:text-white"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  )}

                  {/* Reset Defaults Option */}
                  <div className="pt-4 border-t border-[#35383F]/60 flex items-center justify-between text-xs text-[#858992]">
                    <span>Reset storage to original seeded list:</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm('Reset all recommendations to initial defaults?')) {
                          RecommendationService.resetToDefaults();
                          loadData();
                        }
                      }}
                      className="text-xs font-mono text-[#D13A49] hover:underline cursor-pointer"
                    >
                      Reset to Defaults
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
