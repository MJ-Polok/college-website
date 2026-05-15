# Gallery Page Design Decisions

## 1. Page Purpose
- এই page হবে `visual archive / gallery page`
- এখানে কলেজের কার্যক্রম, অনুষ্ঠান, সহশিক্ষা ও ক্যাম্পাস জীবনের ছবি দেখানো হবে
- page হবে image-first, but controlled and institutional

## 2. Page Header
- page title: `গ্যালারি`
- short intro text থাকবে
- header simple থাকবে
- background normal light থাকবে

## 3. Gallery Grid Strategy
- main content হবে `controlled editorial grid`
- layout হবে `ratio-aware placement`
- actual image ratio/size অনুযায়ী slot assign হবে
- fixed equal grid হবে না
- messy masonry হবে না
- overall composition controlled ও balanced থাকবে

## 4. Category / Filter Row
- category/filter row থাকবে
- visual language হবে other inner-page filter row-এর মতো
- consistent style maintain করা হবে

### Categories
- `সকল`
- `ক্যাম্পাস`
- `অনুষ্ঠান`
- `সহশিক্ষা`

### Responsive Behavior
- desktop: horizontal row
- mobile: horizontally scrollable row

## 5. Lightbox Behavior
- image click করলে `same-page lightbox` open হবে
- full-screen dark overlay থাকবে
- background page scroll lock হবে
- center-এ বড় image থাকবে
- caption থাকবে
- image index/count থাকতে পারে
- top-right-এ close button থাকবে
- left/right prev-next controls থাকবে

## 6. Keyboard Support
- `Esc` → close
- `Left Arrow` → previous image
- `Right Arrow` → next image

## 7. Mobile Lightbox Behavior
- mobile-এ swipe gesture থাকবে না
- controls/tap দিয়েই navigation হবে

## 8. Overall Feel
- clean
- visual-first
- editorial
- controlled
- institutional

## 9. Still To Be Finalized
- none

## 10. Colors
- page background: `#F7F1E3`
- header background: `#F7F1E3`
- filter row background: `#FFF9EF`
- filter row border: `1px solid #DED2C2`
- active filter text: `#7A1E4D`
- inactive filter text: `#6E625A`
- hover filter text: `#5C173A`

### Grid / Image Area
- image wrapper background optional: `#FFF9EF`
- image wrapper border optional: `1px solid #DED2C2`

### Caption / Lightbox
- caption text: `#FFF9EF`
- caption secondary/index text: `rgba(255, 249, 239, 0.82)`
- lightbox overlay: very dark maroon-black tone
- lightbox controls: `#FFF9EF`

## 11. Hover Behavior
- image zoom effect থাকবে না
- tilt/lift effect থাকবে না
- image-এর নিচের faded overlay একটু উপরে উঠবে
- caption একটু বেশি prominent হবে
- border থাকলে slightly stronger হতে পারে

## 12. Mobile Grid Layout
- mobile-এ exact desktop editorial layout রাখা হবে না
- mobile হবে `simplified editorial layout`
- first image featured / একটু বড় হতে পারে
- এরপর `2-column` image flow থাকবে
- later optional wider break রাখা যেতে পারে
- overall feel editorial-inspired থাকবে, but usability-first হবে

## 13. Empty State
- main message: `কোনো ছবি পাওয়া যায়নি`
- supporting text: `অনুগ্রহ করে অন্য বিভাগ নির্বাচন করে আবার দেখুন।`
- optional reset action: `সব ছবি দেখুন`

## 14. Loading State
- loading state থাকবে
- gallery grid skeleton loader দেখানো হবে
- desktop-এ mixed placeholder blocks থাকবে
- mobile-এ simplified editorial placeholder flow থাকবে

## 15. Pexels API Image Use Notes

### Purpose
- `Pexels API` temporary / filler image source হিসেবে use করা যাবে
- বিশেষ করে `gallery` page, homepage `ক্যাম্পাস জীবন`, `আমাদের কলেজ` section-এর জন্য use করা যেতে পারে
- final live version-এ possible হলে real college images দিয়ে replace করা হবে

### Image Use Direction
- image search keyword project need অনুযায়ী select করা হবে
- fetched images থেকে project mood-এর সাথে match করে image choose করা হবে
- overly corporate / unrelated foreign-looking campus image avoid করা হবে
- একই page-এ tone, lighting, quality যতটা সম্ভব consistent রাখা হবে

### Relevant Use Areas
- `Homepage Hero` background fallback
- `আমাদের কলেজ` section images
- `ক্যাম্পাস জীবন` preview section
- `/gallery` page

### API Response Data To Use
- image id
- image source URL
- photographer name
- photographer URL if needed
- image page/source URL
- alt text / description if available
- different image sizes if needed

### Gallery / Category Handling
- Pexels custom Bangla category জানে না
- তাই project side-এ category assign করা হবে
- possible categories:
  - `সকল`
  - `ক্যাম্পাস`
  - `অনুষ্ঠান`
  - `সহশিক্ষা`

### Display Rules
- desktop-এ editorial / ratio-aware gallery composition follow করা হবে
- mobile-এ simplified editorial layout follow করা হবে
- lightbox open হলে larger image source use করা যাবে
- thumbnail/grid view-এ smaller optimized source use করা যাবে

### Quality Rules
- blurry / low-quality image avoid করা হবে
- extreme color mismatch avoid করা হবে
- same section-এ highly mixed styles avoid করা হবে
- image crop করলে important subject যেন cut না হয়

### Long-Term Direction
- first version-এ Pexels image use করা যাবে
- later real college images দিয়ে gradual replacement best হবে
