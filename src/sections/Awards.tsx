import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Awards() {
  const awards = [
    { year: '2023', title: 'First prize in scientific research', topic: 'Artificial intelligence applications use machine learning to predict diabetes.', desc: 'This study uses patient data from Kaggle, which, after cleaning and enhancement with SMOTE + Random Sampling, expanded the dataset to 5767 samples. The research team proposed the iXGBoost model (an improvement of XGBoost) combining hyperparameter optimization using GridSearchCV and handling of imbalanced data. The research methodology includes a process from preprocessing, feature extraction (PCA), training, and evaluation with a validation dataset. The results show that iXGBoost achieved an accuracy of approximately 99%, outperforming other models such as LightGBM and Random Forest, demonstrating high efficiency in predicting diabetes.', images: ['/assets/images/Awards/Diabetes/465007985_859826799672527_1549409442677418151_n.jpg', '/assets/images/Awards/Diabetes/z6292816618826_b875a5be41aa2701e7755794ea4adec1.jpg', '/assets/images/Awards/Diabetes/z5474098960589_707a473701b1012bba37c3d0f34023e9.jpg', '/assets/images/Awards/Diabetes/z6292806419331_e636d955c3df291834a7b8536f698664.jpg', '/assets/images/Awards/Diabetes/z5474746065789_8e448fd89ab919f95032dd635e24ae85.jpg', '/assets/images/Awards/Diabetes/DSC05134.jpg', '/assets/images/Awards/Diabetes/444991277_793747959531588_63280802805947917_n.jpg'] },
    { year: '2023', title: 'Join the IT Got Talent', topic: 'Data processing and optimization of medical data models.', desc: 'HUTECH IT Got Talent is a major academic competition organized by the Faculty of Information Technology – Ho Chi Minh City University of Technology, aiming to create an environment for exchange, promote scientific research, and discover young talents in the field of information technology for university students nationwide. The competition is divided into 6 main categories: Category A: Information Security; Category B: Smart Device Applications; Category C: Website Applications; Category D: Artificial Intelligence & Blockchain; Category E: Computer Networks; Category F: Data Science.', images: ['/assets/images/Awards/IT Gotalents/z7657911186688_f7685a765512305c613fa138dabf7b33.jpg'] },
    { year: '2024', title: 'HDBank Hackathon Encouragement Award', topic: 'Applying Artificial Intelligence in Credit Risk Assessment\nUsing Machine Learning', desc: 'The project "Applying Artificial Intelligence to Support Credit and Loan Approval Processes in Banks" focuses on building a system using Machine Learning, specifically the XGBoost model, to predict customer repayment ability based on a large dataset from Kaggle with over 1 million records and more than 100 financial characteristics. The data was pre-processed through cleaning, normalization, missing value processing, and balancing using SMOTE, then split using a retention method (80% training, 20% testing). The model was optimized using GridSearchCV to find the best hyperparameters and evaluated using metrics such as Accuracy, F1 score, and ROC. The results achieved an accuracy of approximately 81%, demonstrating good classification between risky and safe customers. The system is also deployed on the AWS platform, which helps automate the credit approval process, reduce processing time, improve accuracy, and support banks in making more effective decisions in practice.', images: ['/assets/images/Awards/HD Bank/z7661257546119_052094ecc5a289f07bfc3ae6f632eb6c.jpg', '/assets/images/Awards/HD Bank/z6292831714111_86da7178e0969bd40ab24838d74074b7.jpg', '/assets/images/Awards/HD Bank/z7661266346884_59fdb9364b3072c4c546c8e6fb39dca0.jpg', '/assets/images/Awards/HD Bank/z7661257559550_b97a39f34566bbb977e8058a05d2d3c8.jpg', '/assets/images/Awards/HD Bank/z7661257571577_d20038d9bf4c2af570c247bfd9d360b9.jpg', '/assets/images/Awards/HD Bank/z7661257573198_4efad5f2045fb9ef221013c23590a37a.jpg'] },
    { year: '2024', title: 'Student Scientific Research Award – Euréka', topic: 'An effective method for diabetes prediction using machine learning', desc: 'The Euréka Student Scientific Research Award (often called the Euréka Award) is the most prestigious and reputable award for student scientific research in Vietnam. Organized by the Center for the Development of Young Scientists and Technologists (Ho Chi Minh City Youth Union), the competition aims to encourage students from universities, colleges, and academies nationwide to conduct innovative scientific research projects, propose solutions, and make new inventions that contribute to national development and improve the quality of education.', images: ['/assets/images/Awards/Euréka/z7661415738608_72b5c1a8a616396b94827e3910d66e8c.jpg','/assets/images/Awards/Euréka/z7661437289677_6e250f3b67e9a8618479fe44a3c04bf7.jpg','/assets/images/Awards/Euréka/z7661437317263_99b6a29ae63bc93bc5f01e73ebc55393.jpg'] },
    { year: '2025', title: 'Third prize in scientific research', topic: 'Early diagnosis of Alzheimer\'s disease using Deep Learning combined with Convolutional Neural Networks (CNNs) and Attention Mechanism.', desc: 'This study proposes a CNN-ATT model combining convolutional neural networks (CNNs) and Attention Mechanism for early diagnosis of Alzheimer\'s disease using an IDA dataset (ADNI) of over 6,400 brain MRI images (4 labels). The data were pre-processed, resized to 128×128, divided into retention sets with an 80-20 ratio, feature extraction was performed using CNN AlexNet, and GridSearchCV was applied to optimize hyperparameters. Dropout, Layer Normalization, and Grad-CAM were also used to reduce overfitting and improve interpretability. Experimental results showed the model achieved 98% accuracy, 98.75% sensitivity, 98.5% F1 score, and 98.5% prediction accuracy, outperforming VGG16, ResNet, U-Net, and previous studies. The research team also developed a user-friendly web interface that allows for image uploading, disease stage prediction, and lesion visualization using Grad-CAM, contributing to early disease detection by physicians and reducing the healthcare burden.', images: ['/assets/images/Awards/Alzheimer/z7657929190835_c86d0ba7e9d51c432cdc40f3aefcf80a.jpg','/assets/images/Awards/Alzheimer/z7657929151978_d32db2ffd3526ccbd09c5b6175448c2b.jpg','/assets/images/Awards/Alzheimer/z7657929180025_8ba8d5ec4f2703115f1a3b1da78f79bd.jpg','/assets/images/Awards/Alzheimer/z7661299283608_7de8b24a80d67e0148a4e9f8fe1ee17b.jpg'] },
    { year: '2025', title: 'Join the Artificial Intelligence Challenge contest.', topic: 'LiDAR data processing: issues with binary and multilayer data.', desc: 'The HUTECH AI CHALLENGE 2024 Multiclass Classification is the semi-final round of the artificial intelligence competition organized by Ho Chi Minh City University of Technology (HUTECH) on the Kaggle platform. The competition focuses on multiclass classification problems, encouraging students to apply machine learning and deep learning to build predictive models. Participants (maximum 4 members per team) must submit a CSV file of their prediction results along with their source code notebook. Evaluation is based on a private leaderboard (approximately 33% of the test data is hidden). The competition has concluded, and the score from the Multiclass section will account for 60% of the overall HUTECH AI Challenge 2024 results (in combination with the Binary Classification section). This is a platform to promote practical AI skills for students.', images: ['/assets/images/Awards/AI Challenge/DSC02922.jpg','/assets/images/Awards/AI Challenge/DSC02744.jpg','/assets/images/Awards/AI Challenge/DSC02722.jpg','/assets/images/Awards/AI Challenge/DSC02614.jpg'] },
    { year: '2025', title: 'Participating in the GSETS International Scientific Conference', topic: 'An effective method for diabetes prediction using machine learning', desc: 'GSETS 2025 (2nd International Conference on “Green Solutions and Emerging Technologies for Sustainable Development”) is the second international scientific conference organized by Ho Chi Minh City University of Technology (HUTECH) in collaboration with the Ho Chi Minh City Industry 4.0 Center, taking place on April 10-11, 2025 at the Thu Duc campus, Ho Chi Minh City. The conference is part of a series of events celebrating HUTECH\'s 30th anniversary (1995-2025), focusing on three main themes: Advanced Materials and Green Manufacturing, Solutions and Technologies for Sustainable Development, and Data Science & Artificial Intelligence for Sustainable Development. The goal is to create a forum for exchange and research collaboration between Vietnamese and international scientists, sharing experiences and transferring new technologies towards sustainable development. The conference attracted nearly 300 scientists from many countries and published its proceedings electronically with an ISBN.', images: ['/assets/images/Awards/GSETS/z7661325928966_0a88925ce1c2801b1b17bf7e4ac6e68b.jpg','/assets/images/Awards/GSETS/z7661325972877_47390e35f8efb592fc1c8d038858c587.jpg','/assets/images/Awards/GSETS/z7661326034174_aa06c36e9af0304a4b0806de983ddef2.jpg','/assets/images/Awards/GSETS/z7661326074947_577f7f5b5c33ec8a93ba0531f97d7840.jpg'] },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  // Preview image index on the left card (so clicking thumbnails "jumps" there)
  const [previewImageIndex, setPreviewImageIndex] = useState(0);

  const [noticeOpen, setNoticeOpen] = useState(false);
  const [noticeText, setNoticeText] = useState('');
  const [noticeKey, setNoticeKey] = useState(0);
  const noticeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoPlay, awards.length]);

  useEffect(() => {
    // Reset preview when the main slide changes (avoid index out-of-range)
    setPreviewImageIndex(0);
    setModalImageIndex(0);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentAward = awards[currentIndex];
  const currentImages = currentAward.images || [];

  const openModal = () => {
    setAutoPlay(false); // Prevent the carousel from switching while user is navigating images
    setModalOpen(true);
    setModalImageIndex(previewImageIndex);
    showNotice('Image opened. Click a thumbnail to switch.');
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    showNotice('Image changed.');
    setModalImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    showNotice('Image changed.');
    setModalImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const showNotice = (text: string) => {
    if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
    setNoticeText(text);
    setNoticeKey((k) => k + 1);
    setNoticeOpen(true);
    noticeTimerRef.current = window.setTimeout(() => setNoticeOpen(false), 1700);
  };

  return (
    <section id="awards" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-full mx-auto overflow-x-hidden">
      <AnimatePresence>
        {noticeOpen && (
          <motion.div
            key={noticeKey}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[4.5rem] sm:top-6 left-4 right-4 sm:left-auto sm:right-6 z-[60] pointer-events-none flex justify-end sm:block"
          >
            <div className="flex items-center gap-3 bg-green-500/15 backdrop-blur-xl border border-green-300/25 rounded-full px-4 py-2 shadow-[0_0_28px_rgba(34,197,94,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
              <span className="text-green-100 text-[10px] sm:text-xs font-label tracking-wide text-right sm:text-left max-w-[min(100%,18rem)] sm:max-w-none sm:whitespace-nowrap">
                {noticeText}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-1">
        <p className="font-label text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] text-secondary uppercase mb-3 sm:mb-4">
          Recognition
        </p>
        <h2 className="font-headline font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight">
          My Award At University
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-10 bg-surface-container-highest p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-outline-variant/10 min-h-[36rem] lg:min-h-[42rem] overflow-hidden"
          >
            {/* Left: Images with thumbnail gallery */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3 sm:gap-4 w-full lg:w-auto">
              {/* Main image display */}
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                onClick={openModal}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-full max-w-[20rem] sm:max-w-sm lg:w-80 h-52 sm:h-60 lg:h-64 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/30 via-tertiary/20 to-secondary/10 border border-secondary/20 flex items-center justify-center overflow-hidden cursor-pointer group mx-auto"
              >
                {currentImages.length > 0 ? (
                  <>
                    <img 
                      src={currentImages[previewImageIndex]} 
                      alt={currentAward.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl font-black text-secondary/40 mb-4">{currentAward.year}</div>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-secondary to-tertiary rounded-full mx-auto"></div>
                  </div>
                )}
              </motion.div>

              {/* Thumbnail gallery */}
              {currentImages.length > 1 && (
                <div className="flex gap-2 flex-wrap justify-center max-w-full sm:max-w-56 px-1">
                  {currentImages.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => {
                        setPreviewImageIndex(i);
                        showNotice(`Selected image ${i + 1}.`);
                      }}
                      className={`w-12 h-12 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        i === previewImageIndex ? 'border-secondary shadow-[0_0_15px_rgba(192,193,255,0.5)]' : 'border-outline-variant/20'
                      }`}
                    >
                      <img src={img} alt={`${currentAward.title} ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center min-w-0 text-center lg:text-left">
              <p className="font-label text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-secondary uppercase mb-2 font-bold">
                {currentAward.year}
              </p>
              <h3 className="font-headline font-black text-xl sm:text-2xl lg:text-3xl text-white mb-2 leading-snug">
                {currentAward.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-secondary font-semibold mb-3 sm:mb-4 whitespace-pre-line">
                {currentAward.topic}
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed text-left">
                {currentAward.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots / Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-12 flex-wrap px-1">
          {awards.map((award, i) => (
            <motion.button
              key={i}
              onClick={() => goToSlide(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label text-[10px] sm:text-xs font-semibold transition-all max-w-[7rem] sm:max-w-xs truncate ${
                i === currentIndex
                  ? 'bg-secondary text-surface-highest shadow-[0_0_20px_rgba(192,193,255,0.4)]'
                  : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant hover:border-secondary/50'
              }`}
              title={`${award.year} - ${award.title}`}
            >
              {award.year} #{i + 1}
            </motion.button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4 sm:mt-6 px-2">
          <motion.button
            onClick={() => setAutoPlay(!autoPlay)}
            className="text-xs text-on-surface-variant font-label tracking-wide uppercase px-4 py-2 rounded-full border border-outline-variant/20 hover:border-secondary/50 transition-all"
          >
            {autoPlay ? '⏸ Auto-playing' : '▶ Resume'}
          </motion.button>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {modalOpen && currentImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-highest/35 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-outline-variant/20 w-full max-w-3xl max-h-[min(92dvh,900px)] overflow-hidden flex flex-col relative"
            >
              {/* Top & bottom blur bands to avoid harsh modal color blocks */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/55 to-transparent backdrop-blur-xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/55 to-transparent backdrop-blur-xl" />

              {/* Close button (no title/header) */}
              <div className="absolute top-4 right-4 z-10">
                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  onClick={closeModal}
                  className="text-on-surface-variant hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-xl border border-outline-variant/20 rounded-full p-2"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Main Image */}
              <div className="relative bg-black/25 flex items-center justify-center overflow-hidden h-[min(45vh,16rem)] sm:h-80 md:h-96 mt-8 sm:mt-10 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={modalImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={currentImages[modalImageIndex]}
                    alt={`${currentAward.title} ${modalImageIndex + 1}`}                    loading="lazy"
                    decoding="async"                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Navigation Arrows - Only show if multiple images */}
                {currentImages.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 bg-secondary/80 hover:bg-secondary text-white p-2 rounded-full transition-all"
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 bg-secondary/80 hover:bg-secondary text-white p-2 rounded-full transition-all"
                    >
                      <ChevronRight size={24} />
                    </motion.button>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-label">
                      {modalImageIndex + 1} / {currentImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Preview Bar */}
              {currentImages.length > 1 && (
                <div className="bg-surface-container-highest/20 backdrop-blur-xl p-4 border-t border-outline-variant/10 overflow-x-auto">
                  <div className="flex gap-3 min-w-max px-2">
                    {currentImages.map((img, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                          setModalImageIndex(i);
                          showNotice(`Image switched to ${i + 1}.`);
                        }}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          i === modalImageIndex 
                            ? 'border-secondary shadow-[0_0_15px_rgba(192,193,255,0.5)]' 
                            : 'border-outline-variant/30 hover:border-secondary/50'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
