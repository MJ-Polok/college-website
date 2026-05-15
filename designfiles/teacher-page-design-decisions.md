# Teacher Page Design Decisions

## 1. Page Purpose
- এই page হবে `teacher directory / profile overview` type page।
- এটা full detailed profile page না।
- later চাইলে individual teacher detail page add করা যাবে।

## 2. Page Header
- page title: `সকল শিক্ষকবৃন্দ`
- short intro text থাকতে পারে।
- header simple থাকবে, অন্য inner page header-এর মতো।

## 3. Filter Row
- filter row থাকবে।
- visual language হবে `notice archive` filter row-এর মতো।
- background: `#FFF9EF`
- border: `1px solid #DED2C2`
- radius: `8px`
- no heavy shadow

### Filter Controls
- left: `search bar`
- right: `বিভাগ` filter

### Responsive Behavior
- desktop: horizontal row
- mobile: stacked

## 4. Teacher List Layout
- teacher list হবে `formal profile panel grid`
- desktop: `3-column`
- tablet: `2-column`
- mobile: `1-column`
- সব panel same size হবে

## 5. Profile Panel Style
- type: `formal profile panel`
- background: `#FFF9EF`
- border: `1px solid #DED2C2`
- radius: `8px`
- no deep shadow
- no soft SaaS-style floating card look

## 6. Panel Image
- image position: top
- image ratio: `4:5`
- formal portrait style
- সব panel-এ same image area থাকবে

## 7. Panel Content Order
1. `photo`
2. `teacher name`
3. `designation`
4. `department`
5. optional minimal contact info

## 8. Contact Info
- contact info optional
- minimal রাখা হবে
- best: `ইমেইল` বা `ফোন` এর যেকোনো একটাই

## 9. Text Colors
- name: `#1F1A17`
- designation: `#6E625A`
- department: `#6E625A`
- contact/accent: `#7A1E4D`

## 10. Spacing
- panel padding desktop: `1.5rem`
- panel padding mobile: `1.25rem`
- image → name: `1rem`
- name → designation: `0.5rem`
- designation → department: `0.5rem`
- department → contact: `0.75rem`

## 11. Hover Behavior
- profile panel-এ hover effect রাখা হবে না
- কারণ current version-এ panel clickable না
- user confusion avoid করার জন্য panel static থাকবে
- no tint
- no border emphasis
- no zoom
- no lift

## 12. Click Behavior
- individual teacher detail page এখন বানানো হবে না
- তাই panel/card clickable হওয়া mandatory না
- future-এ detail page add করার জন্য structure open রাখা হবে

## 13. Empty State
- main message: `কোনো শিক্ষক পাওয়া যায়নি`
- supporting text: `অনুগ্রহ করে অন্য নাম বা বিভাগ নির্বাচন করে আবার খুঁজুন।`
- optional reset action: `সব শিক্ষক দেখুন`

## 14. Loading State
- loading state থাকবে
- same grid shape-এ skeleton loader দেখানো হবে
- image placeholder থাকবে
- name/designation/department text line placeholders থাকবে

## 15. Overall Feel
- formal
- structured
- clean
- institutional
- calm and restrained
