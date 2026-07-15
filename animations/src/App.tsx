import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Menu, ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown, Utensils, Star } from 'lucide-react';

const items = [
  {
    id: 1,
    title1: "LAMB STEAK",
    title2: "POTATO",
    subtitle: "#2 Most loved dish",
    rating: "4.3",
    chef: "Chef K Semy",
    desc: "Dosen pembimbingku kok asem tenan yo rek, masak ket wingi ra teko teko, su! su!!",
    image: "lamb.png",
    name: "lamb steak potato",
    likes: "36 likes",
    blobColor: "#E8D5D0", // pinkish
    ratingColor: "#FFB6C1"
  },
  {
    id: 2,
    title1: "SALMON",
    title2: "SALAD",
    subtitle: "#1 Most healthy dish",
    rating: "4.8",
    chef: "Chef Adin Salmon",
    desc: "Wortel mix pur, dengan modus 'neng mabar yuk' akhirnya adin sukses menjadi juragan.",
    image: "salmon.png",
    name: "salmon salad pak adin",
    likes: "50 likes",
    blobColor: "#E2DACF", // warm beige
    ratingColor: "#FFE4B5"
  },
  {
    id: 3,
    title1: "MARTABAK",
    title2: "PAK ADIN",
    subtitle: "#3 Most loved dish",
    rating: "4.6",
    chef: "Chef Adin Salmon",
    desc: "Dengan modus 'neng mabar yuk' akhirnya adin sukses menjadi juragan penerus mas pur",
    image: "martabak.png",
    name: "Martabak pak adin",
    likes: "36 likes",
    blobColor: "#D3DBCE", // light green
    ratingColor: "#C1E1C1"
  },
  {
    id: 4,
    title1: "SOTO SAPI",
    title2: "PAK ODIN",
    subtitle: "#4 Most loved dish",
    rating: "4.5",
    chef: "Chef Odin",
    desc: "Soto sapi segar dengan rempah pilihan khas nusantara dan kuah kaldu sapi asli.",
    image: "soto.png",
    name: "Soto sapi pak odin",
    likes: "20 likes",
    blobColor: "#D0D6E8", // light blue
    ratingColor: "#ADD8E6"
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-[#e0e3e5] to-[#f4f4f4] relative text-[#333]">
      
      {/* Background abstract shapes */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full mix-blend-multiply opacity-20 blur-3xl pointer-events-none"
        animate={{ 
          backgroundColor: activeItem.blobColor,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      
      {/* Arch behind plate (like the orange/pink arch in the image) */}
      <motion.div
        className="absolute top-0 left-[10%] w-[600px] h-[600px] border-[80px] rounded-full pointer-events-none opacity-60 mix-blend-multiply"
        animate={{ borderColor: activeItem.blobColor }}
        transition={{ duration: 0.8 }}
      />

      {/* Top Navbar */}
      <div className="absolute top-8 right-12 flex gap-6 z-50">
        <button className="p-2 hover:bg-black/5 rounded-full transition">
          <Search size={24} strokeWidth={2} />
        </button>
        <button className="p-2 hover:bg-black/5 rounded-full transition">
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {/* Hanging Lamp */}
      <motion.div 
        className="absolute top-0 right-[8%] w-[60px] h-[300px] flex flex-col items-center z-40"
        style={{ transformOrigin: "top center" }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[2px] h-[200px] bg-gray-400"></div>
        <div className="w-[4px] h-[30px] bg-yellow-600"></div>
        <div className="w-16 h-24 bg-[#1a1a1a] rounded-t-full rounded-b-md shadow-2xl relative">
          <div className="absolute bottom-0 w-full h-2 bg-white/20"></div>
        </div>
      </motion.div>

      {/* Main Content Layout */}
      <div className="w-full h-full flex items-center justify-between px-16">
        
        {/* LEFT: Main Plate Image */}
        <div className="w-[40%] flex justify-center items-center relative z-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.name}
              className="w-[500px] h-[500px] object-contain drop-shadow-2xl mix-blend-multiply"
              initial={{ opacity: 0, x: 200, y: -400, rotate: 90, scale: 0.6 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: -400, y: 150, rotate: -90, scale: 0.6 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* MIDDLE: Text Content */}
        <div className="w-[35%] flex flex-col justify-center z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex flex-col"
            >
              <motion.span className="text-sm font-semibold tracking-wider mb-2 text-gray-700">
                {activeItem.subtitle}
              </motion.span>
              
              <div className="leading-[0.9] mb-8">
                <motion.h1 
                  className="text-[5rem] font-light tracking-tighter"
                >
                  {activeItem.title1}
                </motion.h1>
                <motion.h1 
                  className="text-[5rem] font-bold tracking-tighter text-[#333]"
                >
                  {activeItem.title2}
                </motion.h1>
              </div>

              <div className="flex gap-8 items-center text-sm font-semibold text-gray-700">
                <button className="flex items-center gap-2 hover:opacity-70 transition">
                  <Play size={16} fill="currentColor" /> Play video
                </button>
                <button className="flex items-center gap-2 hover:opacity-70 transition">
                  <Utensils size={16} /> Order food
                </button>
              </div>
            </motion.div>
          </AnimatePresence>


        </div>

        {/* RIGHT: Info Card */}
        <div className="w-[25%] flex justify-end items-center z-20 mr-12">
           <AnimatePresence mode="wait">
             <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="w-[320px] bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/50"
             >
                <div className="flex justify-between items-center mb-8 text-sm font-semibold text-gray-500">
                  <span className="text-black border-b-2 border-black pb-1">Overview</span>
                  <span className="hover:text-black cursor-pointer">Ingredients</span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-20 rounded-2xl flex flex-col justify-center items-center shadow-md relative overflow-hidden"
                    animate={{ backgroundColor: activeItem.ratingColor }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-2xl font-bold">{activeItem.rating}</span>
                    <Star size={12} fill="currentColor" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{activeItem.chef}</h3>
                <p className="text-xs text-gray-500 mb-4">Komunitas Pecinta Brutu</p>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  {activeItem.desc}
                </p>

                <div className="flex items-center gap-6 text-gray-500">
                  <button className="flex items-center gap-2 hover:text-black transition">
                    <ThumbsUp size={20} />
                  </button>
                  <button className="flex items-center gap-2 hover:text-black transition">
                    <ThumbsDown size={20} />
                  </button>
                  <span className="text-xs ml-auto">{activeItem.likes}</span>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM CAROUSEL */}
      <div className="absolute bottom-8 left-[15%] w-[60%] flex items-center gap-8 z-30">
        <button onClick={handlePrev} className="p-2 hover:bg-black/5 rounded-full transition">
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4 items-end">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={item.id} className="relative flex flex-col items-center">
                <motion.div
                   className={`w-24 h-[140px] rounded-2xl flex flex-col justify-start items-center p-3 cursor-pointer transition-all duration-300 ${isActive ? 'bg-white/60 shadow-lg border border-white/50 backdrop-blur-md' : 'hover:bg-white/20'}`}
                   onClick={() => setActiveIndex(idx)}
                   layout
                >
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className={`w-16 h-16 object-contain drop-shadow-md mb-2 mix-blend-multiply transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`} 
                   />
                   <span className="text-[10px] text-center font-medium text-gray-700 leading-tight">
                      {item.name}
                   </span>
                </motion.div>
              </div>
            )
          })}
        </div>

        <button onClick={handleNext} className="p-2 hover:bg-black/5 rounded-full transition">
          <ChevronRight size={24} />
        </button>
      </div>



      {/* Table / Environment context in bottom right */}
      <div className="absolute -bottom-[20%] right-0 w-[40%] h-[50%] bg-white rounded-tl-[3rem] shadow-2xl z-10 flex flex-col">
         {/* Countertop */}
         <div className="h-12 w-full bg-[#f8f9fa] border-b border-gray-200 rounded-tl-[3rem]"></div>
         <div className="flex-1 w-full bg-white flex justify-end p-8 gap-4">
             <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
             <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
         </div>
      </div>
      {/* Stools */}
      <div className="absolute bottom-2 right-[20%] w-24 h-8 bg-[#111] rounded-[50%] z-20 shadow-xl"></div>
      <div className="absolute bottom-6 right-[5%] w-24 h-8 bg-[#111] rounded-[50%] z-20 shadow-xl"></div>
      {/* Plant */}
      <div className="absolute bottom-[30%] right-[10%] w-10 h-10 flex flex-col items-center z-30">
          <div className="w-6 h-6 bg-green-600 rounded-full shadow-lg"></div>
          <div className="w-4 h-6 bg-gray-800 rounded-b-md"></div>
      </div>
    </div>
  );
}
