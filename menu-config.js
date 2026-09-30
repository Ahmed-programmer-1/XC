/* محتوى وترتيب القائمة الجانبية (☰) وزر "الأقسام" (▼) — تُدار من admin.html
   type: "section" = قسم فيديو (يظهر في زر "الأقسام ▼")
   type: "other"   = عنصر عادي (يظهر في القائمة الجانبية ☰) */

window.MENU_CONFIG = [
  { "key": "eng", "label": "كورسات بالإنجليزية", "href": "section.html?type=english", "icon": "M12 3L2 12h3v8h6v-6h2v6h6v-8h3z", "visible": true, "type": "section" },
  { "key": "single", "label": "كورسات حلقة واحدة", "href": "section.html?type=single", "icon": "M8 5v14l11-7z", "visible": true, "type": "section" },
  { "key": "dizmk", "label": "قسم ديزمك", "href": "section.html?type=dizmk", "icon": "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z", "visible": true, "type": "section" },
  { "key": "cards", "label": "قسم كروت", "href": "section.html?type=cards", "icon": "M4 6h16v4H4zm0 6h16v6H4z", "visible": true, "type": "section" },
  { "key": "notifications", "label": "الإشعارات", "href": "hub.html?tab=notifications", "icon": "M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z", "visible": true, "type": "other" },
  { "key": "polls", "label": "الاستطلاعات", "href": "hub.html?tab=polls", "icon": "M3 13h4v8H3zm7-8h4v16h-4zm7 4h4v12h-4z", "visible": true, "type": "other" },
  { "key": "schedule", "label": "مواعيد العرض", "href": "hub.html?tab=schedule", "icon": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2z", "visible": true, "type": "other" },
  { "key": "livestream", "label": "البث المباشر", "href": "hub.html?tab=livestream", "icon": "M8 5v14l11-7z", "visible": true, "type": "other" },
  { "key": "mylists", "label": "قوائمي", "href": "hub.html?tab=mylists", "icon": "M7 10l5 5 5-5z", "visible": true, "type": "other" },
  { "key": "wishlist", "label": "أمنياتي", "href": "hub.html?tab=wishlist", "icon": "M12 21s-6.5-4.35-9.5-8.5C.5 9 2 5.5 5.5 5c2-.3 3.6.7 4.5 2 .9-1.3 2.5-2.3 4.5-2 3.5.5 5 4 3 7.5C18.5 16.65 12 21 12 21z", "visible": true, "type": "other" },
  { "key": "suggestions", "label": "اقتراحات", "href": "hub.html?tab=suggestions", "icon": "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z", "visible": true, "type": "other" }
];
