/* =========================================================
   ELEVEN HEAVEN — DATA & INTERACTIONS
   Pembuat: Moddedby Zain Suryo Negoro
   ========================================================= */

const students = [
  {name:"Ajeng Pratiwi Gunardi", nickname:"01", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0010.jpg"},
  {name:"Alfa Rizqi Aldi Alamsyah", nickname:"02", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Alya Rikhodatul Aisyah", nickname:"03", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Aqil Mustaqim", nickname:"04", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0005.jpg"},
  {name:"Daffa Arif Bahtiar", nickname:"05", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0038.jpg"},
  {name:"Danish Andra Fardani", nickname:"06", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG_20260826_074400_130.jpg"},
  {name:"Dude Oerip Zebadiah", nickname:"07", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0040.jpg"},
  {name:"Dzaky Dwi Hendriyanto", nickname:"08", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260820-WA0015.jpg"},
  {name:"Eka Dwi Alfiano", nickname:"09", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0027.jpg"},
  {name:"Fatih Alam Asyrofi", nickname:"10", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260826-WA0003.jpg"},
  {name:"Fathan Athaya Pradipta", nickname:"11", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0008.jpg"},
  {name:"Febbylin Restafiani Aulia", nickname:"12", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0018.jpg"},
  {name:"Fita Nova Azahro", nickname:"13", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260820-WA0018(1).jpg"},
  {name:"Galih Mahija Aulia A.", nickname:"14", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_5473983516846410977.jpg"},
  {name:"Gigih Satria Bima", nickname:"15", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0006.jpg"},
  {name:"Irma", nickname:"16", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0000.jpg"},
  {name:"Kainansyah Rizky G.", nickname:"17", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0036.jpg"},
  {name:"Keysha Zivanna Ramadhani", nickname:"18", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0016.jpg"},
  {name:"Khananya Adhenanta P.S.", nickname:"19", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0020.jpg"},
  {name:"Lionel Alfan Tohara", nickname:"20", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0001.jpg"},
  {name:"Muhammad Aenun Umam", nickname:"21", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0040.jpg"},
  {name:"Muhammad Galih Indra W.", nickname:"22", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Muhammad Jundi Adhila H.", nickname:"23", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0007.jpg"},
  {name:"Muhammad Surya Adam P.", nickname:"24", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260825-WA0063.jpg"},
  {name:"Mutia Qurrota A'yuni", nickname:"25", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Nabilatun Nasyifa", nickname:"26", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Nehan Aditya Pratama", nickname:"27", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260826-WA0029.jpg"},
  {name:"Reghina Putri Faisal", nickname:"28", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Renata Ayushita", nickname:"29", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0237.jpg"},
  {name:"Silfana Afrilia Kustika S.", nickname:"30", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0238.jpg"},
  {name:"Sulistiyo Ramadhan", nickname:"31", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260826-WA0004.jpg"},
  {name:"Sultan Nafis Danoearta", nickname:"32", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260823-WA0001.jpg"},
  {name:"Surya Aditama", nickname:"33", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260826-WA0005(1).jpg"},
  {name:"Syifana Olivia Rahma", nickname:"34", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0233.jpg"},
  {name:"Tinta Adzani Mecca", nickname:"35", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"},
  {name:"Zain Suryo Negoro", nickname:"36", photo:"https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260429-WA0018.jpg"}
];
const memories = [
  {images:["https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260805-WA0019.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260805-WA0013.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260805-WA0016.jpg"], title:"First photo while exercising", category:"Class", date:"Date 05/08/2026"},
  {images:["https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0020.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0019.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0018.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0015.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0009.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0012.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260811-WA0013.jpg"], title:"On the day pilketos", category:"Class", date:"Date 11/08/2026"},
  {images:["https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260820-WA0028.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260820-WA0031.jpg"], title:"Adam sama temennya jalan² ke mall", category:"Random", date:"Date 10/08/2026"},
  {images:["https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260809-WA0001.jpg"], title:"Sulthan dapet 2 hadiah", category:"Random", date:"Date 09/08/2026"},
  {images:["https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0025.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0029.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0021.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0027.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_7680641683682074626.jpg","https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260824-WA0023.jpg"], title:"After finishing the cooking competition", category:"Class", date:"Date 26/08/2026"},
  {
  images: [
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_5667661702051385461_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_4939598996204335765_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_4863164676931972462_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_4014245618259846530_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_3957653622826701519_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_3703706314692803176_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_3040773915754103502_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_2374316998226964381_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_2290774210469665770_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_2051054578677152876_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0064_1.jpg"
  ],
  title: "After finishing the makeup competition",
  category: "Class",
  date: "Date 26/08/2026"
},
    {
  images: [
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0023_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0021_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0019_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0017_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0015_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0011_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0007_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0005_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0003_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0001_1.jpg"
  ],
  title: "Finish the Padus Competition",
  category: "Class",
  date: "Date 27/08/2026"
},
{
  images: [
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0130_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0134_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0136_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0138_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0140_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0142_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0144_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0146_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0151_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0170_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0184_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0178_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0186_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0188_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0190_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0193_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0197_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0200_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0209_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/IMG-20260827-WA0216_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_1308314407893444890_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_4340009536089169175_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_5595458885924959607_1.jpg",
    "https://raw.githubusercontent.com/PretyFX69/kenangan-XI-H/refs/heads/main/motion_photo_5727106818099743458_1.jpg"
  ],
  title: "Portrait of a Girl After Padus",
  category: "Class",
  date: "Date 27/08/2026"
},  
];

const timeline = [
  {year:"2026", title:"First Chapter", text:"Hari-hari pertama, masih saling mengenal, masih malu-malu, dan belum tahu kalau orang-orang ini akan menjadi bagian penting dari cerita kita."},
  {year:"2026", title:"Getting Closer", text:"Mulai banyak tugas, bercanda, kerja kelompok, acara sekolah, dan momen random yang akhirnya justru paling susah dilupakan."},
  {year:"2026", title:"Eleven Heaven", text:"Kita bukan cuma sekumpulan siswa lagi. Kita sudah punya inside jokes, cerita sendiri, dan terlalu banyak kenangan untuk dihitung."},
  {year:"SOON", title:"The Next Chapter", text:"Suatu hari nanti kita akan berjalan ke arah yang berbeda. Tapi nama XI-H akan tetap menjadi satu bagian dari perjalanan kita."}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* =========================================================
   OPTIMASI GAMBAR (hemat kuota/MB)
   Foto asli (dari GitHub, hasil kamera HP) biasanya berukuran
   besar (bisa beberapa MB). Fungsi ini menumpangkan foto ke
   layanan resize+compress gratis (wsrv.nl) sehingga yang
   diunduh browser cuma versi kecil & WebP sesuai ukuran
   tampilnya — bukan file aslinya yang berat.
   ========================================================= */
function optimizedSrc(url, width, quality = 72){
  if(!url) return url;
  if(!/^https?:\/\//i.test(url)) return url; // biarkan data-uri/relatif apa adanya
  const bare = url.replace(/^https?:\/\//i, "");
  return `https://wsrv.nl/?url=${encodeURIComponent(bare)}&w=${width}&q=${quality}&output=webp&we&n=-1`;
}

// Kalau proxy resize gagal (jarang terjadi), otomatis balik ke foto asli
// biar gambar tidak pernah benar-benar rusak/kosong.
document.addEventListener("error", e=>{
  const t = e.target;
  if(t.tagName === "IMG" && t.dataset.original && t.src !== t.dataset.original){
    t.src = t.dataset.original;
  }
}, true);

function renderStudents(){
  $("#studentCount").textContent = students.length;
  $("#studentGrid").innerHTML = students.map((s,i)=>`
    <article class="student-card reveal" data-index="${i}">
      <img src="${optimizedSrc(s.photo,440)}" data-original="${s.photo}" alt="${s.name}" loading="lazy" decoding="async">
      <div class="student-info">
        <small>XI-H • STUDENT ${String(i+1).padStart(2,"0")}</small>
        <h3>${s.name}</h3>
        <p>${s.nickname}</p>
      </div>
      <div class="student-more">↗</div>
    </article>
  `).join("");
  $$(".student-card").forEach(card=>card.addEventListener("click",()=>openStudent(+card.dataset.index)));
}

function renderGallery(filter="All"){
  const cats = ["All", ...new Set(memories.map(m=>m.category))];
  $("#galleryFilters").innerHTML = cats.map(c=>`<button class="filter ${c===filter?"active":""}" data-filter="${c}">${c}</button>`).join("");
  // Kategori "Random" sengaja disembunyikan dari tab "All" —
  // baru muncul kalau tombol filter "Random" dipencet langsung.
  const list = filter==="All"
    ? memories.filter(m=>m.category!=="Random")
    : memories.filter(m=>m.category===filter);
  
  // DI SINI Ikon FontAwesome dipasang (fa-regular fa-image)
  $("#gallery").innerHTML = list.map((m)=>`
    <article class="gallery-item reveal" data-index="${memories.indexOf(m)}">
      <img src="${optimizedSrc(m.images[0],460)}" data-original="${m.images[0]}" alt="${m.title}" loading="lazy" decoding="async">
      ${m.images.length>1 ? `<span class="gallery-count"><i class="fa-regular fa-image" style="margin-right:4px;"></i> ${m.images.length}</span>` : ""}
      <div class="gallery-overlay"></div>
    </article>
  `).join("");
  
  $$(".filter").forEach(b=>b.onclick=()=>renderGallery(b.dataset.filter));
  $$(".gallery-item").forEach(item=>item.onclick=()=>openMemory(+item.dataset.index));
  observeReveals();
}

function renderTimeline(){
  $("#timelineList").innerHTML = timeline.map(t=>`
    <article class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="timeline-year">${t.year}</div>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </article>
  `).join("");
}

function openStudent(i){
  const s=students[i];
  const modalPhoto=$("#modalPhoto");
  modalPhoto.src=optimizedSrc(s.photo,700);
  modalPhoto.dataset.original=s.photo;
  $("#modalName").textContent=s.name;
  $("#modalNick").textContent=s.nickname;
  $("#studentModal").classList.add("open");
  document.body.style.overflow="hidden";
}

let currentMemory = null, currentSlide = 0;

function renderMemorySlide(){
  const imgs = currentMemory.images;
  const memoryImage = $("#memoryImage");
  memoryImage.src = optimizedSrc(imgs[currentSlide],1400);
  memoryImage.dataset.original = imgs[currentSlide];
  const multi = imgs.length > 1;
  $("#slidePrev").style.display = multi ? "grid" : "none";
  $("#slideNext").style.display = multi ? "grid" : "none";
  $("#slideDots").style.display = multi ? "flex" : "none";
  $("#slideDots").innerHTML = multi ? imgs.map((_,i)=>`<span class="${i===currentSlide?"active":""}"></span>`).join("") : "";
}

function goSlide(dir){
  if(!currentMemory) return;
  const len = currentMemory.images.length;
  currentSlide = (currentSlide + dir + len) % len;
  renderMemorySlide();
}

function openMemory(i){
  currentMemory = memories[i];
  currentSlide = 0;
  $("#memoryCategory").textContent=currentMemory.category.toUpperCase();
  $("#memoryTitle").textContent=currentMemory.title;
  $("#memoryDate").textContent=currentMemory.date;
  renderMemorySlide();
  $("#memoryModal").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModals(){
  $$(".modal").forEach(m=>m.classList.remove("open"));
  document.body.style.overflow="";
}
$$(".close-modal,.close-memory,.modal-backdrop").forEach(el=>el.addEventListener("click",closeModals));

/* ===== NAVIGASI SLIDE FOTO MEMORY ===== */
$("#slidePrev").addEventListener("click", e=>{ e.stopPropagation(); goSlide(-1); });
$("#slideNext").addEventListener("click", e=>{ e.stopPropagation(); goSlide(1); });

document.addEventListener("keydown", e=>{
  if(!$("#memoryModal").classList.contains("open")) return;
  if(e.key==="ArrowLeft") goSlide(-1);
  if(e.key==="ArrowRight") goSlide(1);
});

(function(){
  const slider = $("#memorySlider");
  let startX = 0, isDragging = false;
  function getX(e){ return (e.touches ? e.touches[0] : e).clientX; }
  function dragStart(e){ isDragging = true; startX = getX(e); }
  function dragEnd(e){
    if(!isDragging) return;
    isDragging = false;
    const diff = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - startX;
    if(Math.abs(diff) > 40) goSlide(diff < 0 ? 1 : -1);
  }
  slider.addEventListener("touchstart", dragStart, {passive:true});
  slider.addEventListener("touchend", dragEnd);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mouseup", dragEnd);
})();

/* ===== ANIMASI SCROLL ATAS & BAWAH ===== */
function observeReveals(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      } else {
        e.target.classList.remove("show");
      }
    });
  }, { threshold: 0.1 });
  
  $$(".reveal").forEach(el => observer.observe(el));
}

window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  $(".progress").style.width=(scrollY/h*100)+"%";
  $(".navbar").classList.toggle("scrolled",scrollY>30);
  const sections=$$("main section[id]");
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-150) current=s.id});
  $$(".nav-links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

$("#randomMemory").addEventListener("click",()=>{
  const i=Math.floor(Math.random()*memories.length);
  openMemory(i);
  toast("✨ Memory acak dipilih!");
});

$("#topBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

$(".menu-btn").addEventListener("click",()=>$(".nav-links").classList.toggle("open"));
$$(".nav-links a").forEach(a=>a.addEventListener("click",()=>$(".nav-links").classList.remove("open")));

let toastTimer;
function toast(text){
  const el=$("#toast"); el.textContent=text; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove("show"),2200);
}

document.addEventListener("mousemove",e=>{
  const g=$(".cursor-glow");
  g.style.left=e.clientX+"px"; g.style.top=e.clientY+"px";
});

document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModals()});

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>$("#loader").classList.add("hide"),900);
  renderStudents();
  renderGallery();
  renderTimeline();
  setTimeout(observeReveals,150);
});

/* =========================================================
   MUSIC PLAYER OVERLAY
   ========================================================= */
const audio = $("#bgAudio");
const musicWidget = $("#musicWidget");
const musicOrb = $("#musicOrb");
const musicToggle = $("#musicToggle");
const ringProgress = $("#ringProgress");
const musicBar = $("#musicBar");
const musicBarFill = $("#musicBarFill");
const musicCurrent = $("#musicCurrent");
const musicDuration = $("#musicDuration");
const RING_LEN = 100.5; 

function fmtTime(sec){
  if(!isFinite(sec)) return "0:00";
  const m = Math.floor(sec/60), s = Math.floor(sec%60);
  return `${m}:${String(s).padStart(2,"0")}`;
}

function updateMusicToggleUI(){
  const playing = !audio.paused && !audio.ended;
  musicToggle.textContent = playing ? "❚❚" : "▶";
  musicOrb.classList.toggle("playing", playing);
}

audio.addEventListener("loadedmetadata",()=>{ musicDuration.textContent = fmtTime(audio.duration); });
audio.addEventListener("timeupdate",()=>{
  const pct = audio.duration ? (audio.currentTime/audio.duration)*100 : 0;
  musicBarFill.style.width = pct+"%";
  ringProgress.style.strokeDashoffset = RING_LEN - (RING_LEN*pct/100);
  musicCurrent.textContent = fmtTime(audio.currentTime);
});
audio.addEventListener("play",updateMusicToggleUI);
audio.addEventListener("pause",updateMusicToggleUI);

musicOrb.addEventListener("click",()=>musicWidget.classList.toggle("open"));

musicToggle.addEventListener("click",()=>{
  if(audio.paused) audio.play().catch(()=>{}); else audio.pause();
});

musicBar.addEventListener("click",e=>{
  const rect = musicBar.getBoundingClientRect();
  const pct = (e.clientX-rect.left)/rect.width;
  if(audio.duration) audio.currentTime = Math.min(Math.max(pct,0),1)*audio.duration;
});

/* ===== INTRO SCREEN & AUTOPLAY MUSIC ===== */
const welcomeScreen = $("#welcomeScreen");
const enterBtn = $("#enterBtn");

enterBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  if (audio.paused) {
    audio.play().then(() => {
      updateMusicToggleUI();
    }).catch((err) => {
      console.log("Audio play error:", err);
    });
  }
});

/* ===== GESER/PINDAHKAN BULETAN MUSIK (drag mouse & touch) ===== */
(function(){
  let dragging = false, moved = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
  const margin = 8;

  function point(e){ return e.touches ? e.touches[0] : e; }

  function dragStart(e){
    dragging = true; moved = false;
    const p = point(e);
    startX = p.clientX; startY = p.clientY;
    const rect = musicWidget.getBoundingClientRect();
    startLeft = rect.left; startTop = rect.top;
    musicOrb.classList.add("dragging");
  }

  function dragMove(e){
    if(!dragging) return;
    const p = point(e);
    const dx = p.clientX - startX, dy = p.clientY - startY;
    if(Math.abs(dx) > 5 || Math.abs(dy) > 5) moved = true;
    if(!moved) return;
    if(e.cancelable) e.preventDefault();
    const rect = musicWidget.getBoundingClientRect();
    const maxLeft = window.innerWidth - rect.width - margin;
    const maxTop = window.innerHeight - rect.height - margin;
    const newLeft = Math.min(Math.max(startLeft + dx, margin), Math.max(maxLeft, margin));
    const newTop = Math.min(Math.max(startTop + dy, margin), Math.max(maxTop, margin));
    musicWidget.style.left = newLeft + "px";
    musicWidget.style.top = newTop + "px";
    musicWidget.style.right = "auto";
  }

  function dragEnd(){
    if(!dragging) return;
    dragging = false;
    musicOrb.classList.remove("dragging");
  }

  musicOrb.addEventListener("mousedown", dragStart);
  window.addEventListener("mousemove", dragMove);
  window.addEventListener("mouseup", dragEnd);

  musicOrb.addEventListener("touchstart", dragStart, {passive:true});
  window.addEventListener("touchmove", dragMove, {passive:false});
  window.addEventListener("touchend", dragEnd);

  musicOrb.addEventListener("click", e=>{
    if(moved){ e.stopImmediatePropagation(); moved = false; }
  }, true);
})();
