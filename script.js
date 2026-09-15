const projects = [
  {slug:'sulwhasoo',title:'Sulwhasoo Project',tags:'Interactive installation · Cultural research',summary:'Majunol is an interactive seesaw created for Sulwhasoo, a Korean luxury beauty brand, at its Bukchon flagship store in Seoul.',role:'Designer · Team Gilnori',year:'2026',tools:'Metalwork, woodwork, Arduino, MPU-6050 and AI-assisted interaction design',overviewTitle:'',overview:'Working in a multidisciplinary team, I helped research, design, and physically fabricate an installation inspired by the Saja lion from Korean mask dance.',hero:'images/sulwhasoo/full-installation.jpg',heroAlt:'Front view of the complete Majunol interactive seesaw installation',hideImageLabels:true,detailImages:[{src:'images/sulwhasoo/sculptural-detail.jpg',alt:'Close view of the soft sculpted lion-mask surface and curved bell structure',caption:'Sculptural body'},{src:'images/sulwhasoo/seat-detail.jpg',alt:'Close view of the red seesaw seat, curved metal rail, and hanging bells',caption:'Seat and sound detail'}],processTitle:'Research and interaction',process:'We conducted a drawing workshop with children and used their interpretations of the Saja to develop the form. An Arduino and MPU-6050 track the seesaw angle, while an AI-assisted digital workflow supported the responsive screen interaction.',finalImage:'images/sulwhasoo/hero.jpg',finalAlt:'Majunol seesaw with its soft lion-mask surface, red seat, and bell details'},
  {slug:'walkman',title:'Walkman',tags:'Product design · Cassette player',summary:'WM-25 is a transparent cassette player designed around visible mechanics and simplified controls.',role:'Industrial designer',year:'2025',tools:'Rhino 3D and Adobe Photoshop',overviewTitle:'',overview:'The design updates the portable cassette player with a frosted transparent housing, four color options, and a compact control layout.',hero:'images/walkman/hero.png',heroAlt:'Four transparent cassette player concepts in clear, pink, blue, and black',heroNatural:true,hideImageLabels:true,detailImages:[{src:'images/walkman/closed-view.png',alt:'Clear cassette player shown in its closed position',caption:'Closed form'},{src:'images/walkman/open-view.png',alt:'Clear cassette player with its sliding cassette compartment open',caption:'Cassette access'},{src:'images/walkman/mechanism-view.png',alt:'Rear view showing the cassette player gear mechanism through its transparent housing',caption:'Visible mechanism'}],featureImage:'images/walkman/development-poster.png',featureAlt:'WM-25 concept poster showing four color variations and product graphics',featureCaption:'Concept presentation',processTitle:'Design development',process:'The sliding cassette compartment separates tape access from the circular control area. The transparent shell keeps the cassette and gear system visible while the main controls remain grouped at one end.',finalImage:'images/walkman/catalog-board.png',finalAlt:'WM-25 final catalog board with product lineup, specifications, and detail views',finalContain:true},
  {slug:'stackware',title:'Stackware',tags:'Modular tableware · Product system',summary:'Stackware is a five-piece tableware system that can be stacked vertically, grouped, or arranged in a line.',role:'Industrial designer',year:'2025',tools:'CAD, prototyping and rendering',overviewTitle:'',overview:'Each translucent unit uses the same square footprint, allowing the vessels and lids to connect in multiple configurations. The set is shown in clear, red, yellow, blue, and black.',hero:'images/stackware/hero.png',heroAlt:'Five translucent cubic Stackware vessels in clear, red, yellow, blue, and black',heroNatural:true,hideImageLabels:true,detailImages:[{src:'images/stackware/grouped-units.png',alt:'Five closed Stackware units grouped together',caption:'Individual units'},{src:'images/stackware/vertical-stack.png',alt:'Exploded vertical arrangement of five Stackware units',caption:'Vertical stack'},{src:'images/stackware/compact-layout.png',alt:'Five Stackware units arranged in a compact square group',caption:'Compact layout'}],processTitle:'Configurations',process:'The repeated square dimensions allow the set to shift between compact storage and different serving arrangements. The lids can close each vessel or extend outward as individual surfaces.',finalImage:'images/stackware/extended-layout.png',finalAlt:'Five Stackware units connected in an extended horizontal arrangement',finalContain:true},
  {slug:'moon-jar',title:'Moon Jar',tags:'Phone accessories · CMF',summary:'A phone-case concept study developed during my product design internship at Designskin.',role:'Product design intern · Designskin',year:'2025',tools:'Market research, visual development, CAD and rendering',overviewTitle:'',overview:'I researched global phone-accessory trends and developed concepts applying Korean ceramic forms, metal fittings, textile patterns, and illustrated motifs.',hero:'images/moon-jar/ceramic-forms.png',heroAlt:'Four phone cases in white, pink, celadon green, and black with ceramic forms and circular medallions',heroWide:true,hideImageLabels:true,galleryContain:true,detailImages:[{src:'images/moon-jar/metal-fittings.png',alt:'White and black phone cases with Korean metal fitting details',caption:'Metal fittings'},{src:'images/moon-jar/textile-patterns.png',alt:'Four fabric phone cases with crane and traditional pattern variations',caption:'Textile patterns'},{src:'images/moon-jar/illustrated-motifs.png',alt:'Three leather phone cases with illustrated rabbit motifs',caption:'Illustrated motifs'}],processTitle:'Internship process',process:'I moved from market research and visual references into multiple CMF and form directions, then developed the selected ideas through CAD and rendering.',hideFinal:true},
  {slug:'sound-cube',title:'Sound Cube',tags:'Metal fabrication · Kinetic form',summary:'Three hand-built metal cubes exploring perforation, hinged panels, and repeated rods.',role:'Designer and fabricator',year:'2025',tools:'Sheet metal, cutting, drilling, bending and joining',overviewTitle:'',overview:'Each cube uses a different construction system to test how repeated parts, moving panels, and material connections affect form and sound.',hero:'images/sound-cube/perforated-cube.png',heroAlt:'Hand-fabricated metal cube with perforated faces and circular rotating panels',heroPortrait:true,hideImageLabels:true,galleryPortrait:true,detailImages:[{src:'images/sound-cube/rod-cube.png',alt:'Metal cube constructed from silver plates and repeated brass rods',caption:'Rod construction'},{src:'images/sound-cube/folded-cube.png',alt:'Metal cube constructed from overlapping folded and hinged sheet-metal panels',caption:'Folded construction'}],processTitle:'Construction studies',process:'The series compares drilled sheet, rod connections, folded planes, fasteners, and hinges. Each method produces a different balance of rigidity, movement, and surface density.',hideFinal:true},
  {slug:'nest',title:'Nest',tags:'Wood fabrication · Composition',summary:'A sculptural nest formed from laminated plywood utensils around three lathe-turned egg forms.',role:'Designer and maker',year:'2025',tools:'Plywood, bent lamination and wood lathe',overviewTitle:'',overview:'Repeated spoons and forks overlap to create an open bowl structure without a separate supporting form.',hero:'images/nest/material-system.png',heroAlt:'Wooden utensil nest with three egg forms and three loose utensils beside it',heroNatural:true,hideImageLabels:true,galleryNatural:true,detailImages:[{src:'images/nest/front-view.png',alt:'Low front view of the wooden utensil nest and three egg forms',caption:'Front view'},{src:'images/nest/overhead-view.png',alt:'Overhead view of the wooden utensil nest and three egg forms',caption:'Overhead view'}],processTitle:'Construction',process:'Thin plywood layers were bent-laminated into curved utensil forms. The three eggs were turned on a wood lathe, then supported by the utensils crossing at different angles.',hideFinal:true},
  {slug:'sky-mirror',title:'Sky Mirror',tags:'Kite design · Engineering',summary:'A cubic kite developed through aerodynamic testing and lightweight structural design.',role:'Designer and fabricator',year:'2026',tools:'Mylar, wooden dowels, 3D-printed joints and Rhino Grasshopper',overviewTitle:'',overview:'The geometry and open center were refined around lift, drag, weight distribution, and stability in flight.',hero:'images/sky-mirror/two-forms-flight.png',heroAlt:'Colorful translucent and mirrored Sky Mirror forms flying against a blue sky',heroNatural:true,hideImageLabels:true,galleryPortrait:true,detailImages:[{src:'images/sky-mirror/sky-detail.png',alt:'Mirrored open cube suspended against a blue sky',caption:'Mirrored form'},{src:'images/sky-mirror/installed-view.png',alt:'Sky Mirror standing in a grassy park with trees behind it',caption:'Installed view'}],processTitle:'Engineering and flight',process:'I tested frame configurations and bridle positions to identify the most effective flying method. Rhino Grasshopper supported the geometry, while custom 3D-printed joints connect the dowel frame and Mylar surfaces.',video:'images/sky-mirror/flight.mp4',videoPoster:'images/sky-mirror/flight-poster.jpg',videoAlt:'Sky Mirror flying above a beach'},
  {slug:'lightbulb-cube',title:'Lightbulb Cube',tags:'Lighting object · Material study',summary:'A cubic lamp built from repeated translucent acrylic planes around a single bulb.',role:'Designer and maker',year:'2025',tools:'Rhino 3D, laser cutting, acrylic and lighting components',overviewTitle:'',overview:'Parallel acrylic sheets form the enclosure and diffuse the light while keeping the bulb visible from different angles.',hero:'images/lightbulb-cube/angled-view.jpg',heroAlt:'Illuminated acrylic cube lamp viewed from an angle against a dark background',heroPortrait:true,hideImageLabels:true,galleryPortrait:true,detailImages:[{src:'images/lightbulb-cube/front-construction.jpg',alt:'Front view showing the repeated vertical acrylic planes and central bulb',caption:'Front construction'},{src:'images/lightbulb-cube/front-light.jpg',alt:'Straight-on view of the illuminated acrylic cube lamp',caption:'Lighting effect'}],processTitle:'Construction',process:'The repeated planes were modeled in Rhino and laser-cut from clear acrylic. Their spacing reveals and obscures the bulb as the viewing angle changes.',hideFinal:true}
];
const app=document.querySelector('#app');
const homeHTML=app.innerHTML;
const template=document.querySelector('#project-template');
const footer=document.querySelector('footer');
document.querySelector('#year').textContent=new Date().getFullYear();

function renderProject(slug){
  const index=projects.findIndex(project=>project.slug===slug);
  if(index<0){location.hash='work';return}
  const project=projects[index];
  const next=projects[(index+1)%projects.length];
  const page=template.content.cloneNode(true);
  const set=(selector,value)=>page.querySelector(selector).textContent=value;
  set('.project-count',`${String(index+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`);
  set('.project-tags',project.tags); set('.project-title',project.title); set('.project-summary',project.summary);
  set('.project-role',project.role); set('.project-year',project.year); set('.project-tools',project.tools);
  set('.project-overview-title',project.overviewTitle); set('.project-overview',project.overview);
  if(!project.overviewTitle) page.querySelector('.project-overview-title').hidden=true;
  if(project.hero){
    const hero=page.querySelector('.project-hero-image');
    hero.classList.add('has-image');
    if(project.heroNatural) hero.classList.add('project-hero-image--natural');
    if(project.heroWide) hero.classList.add('project-hero-image--wide');
    if(project.heroPortrait) hero.classList.add('project-hero-image--portrait');
    hero.innerHTML=`<img src="${project.hero}" alt="${project.heroAlt}">${project.hideImageLabels?'':'<span>Hero / 01</span>'}`;
  }
  if(project.detailImages){
    const grid=page.querySelector('.process-grid');
    grid.classList.add('project-gallery');
    if(project.detailImages.length===1) grid.classList.add('project-gallery--single');
    if(project.detailImages.length===3) grid.classList.add('project-gallery--three');
    if(project.galleryContain) grid.classList.add('project-gallery--contain');
    if(project.galleryPortrait) grid.classList.add('project-gallery--portrait');
    if(project.galleryNatural) grid.classList.add('project-gallery--natural');
    grid.innerHTML=project.detailImages.map((image,index)=>`<figure class="project-gallery__item"><img src="${image.src}" alt="${image.alt}"><figcaption><span>${String(index+2).padStart(2,'0')}</span>${image.caption}</figcaption></figure>`).join('');
  }
  if(project.featureImage){
    const processStory=page.querySelectorAll('.story-block')[1];
    const feature=document.createElement('figure');
    feature.className='project-feature-image';
    feature.innerHTML=`<img src="${project.featureImage}" alt="${project.featureAlt}">${project.featureCaption?`<figcaption>${project.featureCaption}</figcaption>`:''}`;
    processStory.before(feature);
  }
  if(project.processTitle){
    const processStory=page.querySelectorAll('.story-block')[1];
    processStory.querySelector('h2').textContent=project.processTitle;
    processStory.querySelector('div p').textContent=project.process;
  }
  if(project.finalImage){
    const final=page.querySelector('.project-wide-image');
    final.classList.add('has-image','project-final-image');
    if(project.finalContain) final.classList.add('project-final-image--contain');
    final.innerHTML=`<img src="${project.finalImage}" alt="${project.finalAlt}">${project.finalCaption?`<span>${project.finalCaption}</span>`:''}`;
  }
  if(project.video){
    const final=page.querySelector('.project-wide-image');
    final.className='project-video';
    final.innerHTML=`<video src="${project.video}" poster="${project.videoPoster}" controls muted loop playsinline preload="metadata" aria-label="${project.videoAlt}"></video>`;
  }
  if(project.hideFinal) page.querySelector('.project-wide-image').remove();
  set('.next-title',next.title); page.querySelector('.next-link').href=`#project/${next.slug}`;
  app.replaceChildren(page); footer.hidden=true; document.body.dataset.view='project'; window.scrollTo(0,0); document.title=`${project.title} — Yujin Lee`;
}

function activateConstellation(){
  const cards=[...document.querySelectorAll('.float-project')];
  if(!cards.length) return;
  cards.forEach(card=>{
    const link=card.querySelector('a');
    link.addEventListener('click',event=>{
      if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const frame=card.querySelector('.image-placeholder');
      const image=frame.querySelector('img');
      if(!image) return;
      event.preventDefault();
      const rect=frame.getBoundingClientRect();
      const overlay=document.createElement('div');
      overlay.className='project-transition';
      overlay.setAttribute('aria-hidden','true');
      overlay.style.left=`${rect.left}px`;
      overlay.style.top=`${rect.top}px`;
      overlay.style.width=`${rect.width}px`;
      overlay.style.height=`${rect.height}px`;
      overlay.append(image.cloneNode());
      document.body.append(overlay);
      document.body.classList.add('is-transitioning');
      requestAnimationFrame(()=>overlay.classList.add('is-expanded'));
      setTimeout(()=>{
        location.hash=link.hash;
        requestAnimationFrame(()=>overlay.classList.add('is-revealing'));
        setTimeout(()=>{
          overlay.remove();
          document.body.classList.remove('is-transitioning');
        },260);
      },620);
    });
  });
  if(matchMedia('(pointer: coarse)').matches) return;
  const space=document.querySelector('.creative-space');
  space.addEventListener('pointermove',event=>{
    const x=event.clientX/innerWidth-.5;
    const y=event.clientY/innerHeight-.5;
    cards.forEach((card,index)=>{
      const depth=(index%3+1)*2.2;
      card.style.transform=`translate(${x*depth}px,${y*depth}px)`;
    });
  });
  space.addEventListener('pointerleave',()=>cards.forEach(card=>card.style.transform=''));
}

function renderHome(anchor){
  const view=anchor==='about'||anchor==='contact'?anchor:'home';
  app.innerHTML=homeHTML; footer.hidden=true; document.body.dataset.view=view; document.querySelector('#year').textContent=new Date().getFullYear(); document.title='Yujin Lee — Industrial Design';
  if(view==='home') activateConstellation();
  window.scrollTo(0,0);
}

function route(){
  const hash=location.hash.slice(1);
  if(hash.startsWith('project/')) renderProject(hash.split('/')[1]); else renderHome(hash);
}
window.addEventListener('hashchange',route); route();
