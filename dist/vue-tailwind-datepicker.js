(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-vtd-primary-300:var(--color-sky-300);--color-vtd-primary-500:var(--color-sky-500);--color-vtd-primary-600:var(--color-sky-600);--color-vtd-primary-700:var(--color-sky-700);--color-vtd-secondary-50:var(--color-gray-50);--color-vtd-secondary-100:var(--color-gray-100);--color-vtd-secondary-300:var(--color-gray-300);--color-vtd-secondary-400:var(--color-gray-400);--color-vtd-secondary-500:var(--color-gray-500);--color-vtd-secondary-700:var(--color-gray-700);--color-vtd-secondary-800:var(--color-gray-800);--color-vtd-dark-blue:#1e3a8a;--color-vtd-medium-gray:#f4f1ea;--color-vtd-light-gray:#bcb9b9;--color-vtd-orange:#f70;--color-vtd-blue:#0061ff}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.right-auto{right:auto}.-left-2{left:calc(var(--spacing)*-2)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-50{z-index:50}.order-last{order:9999}.col-span-7{grid-column:span 7/span 7}.mx-2{margin-inline:calc(var(--spacing)*2)}.my-1{margin-block:calc(var(--spacing)*1)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-5{height:calc(var(--spacing)*5)}.h-\\[2\\.25rem\\]{height:2.25rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/2{width:50%}.w-5{width:calc(var(--spacing)*5)}.w-\\[2\\.25rem\\]{width:2.25rem}.w-full{width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2\\/4{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing)*3);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-4{gap:calc(var(--spacing)*4)}.gap-\\[6px\\]{gap:6px}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0{row-gap:calc(var(--spacing)*0)}.gap-y-0\\.5{row-gap:calc(var(--spacing)*.5)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-l-md{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}.rounded-r-md{border-top-right-radius:var(--radius-md);border-bottom-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-solid{--tw-border-style:solid;border-style:solid}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\/\\[\\.1\\]{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/\\[\\.1\\]{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-transparent{border-color:#0000}.border-vtd-orange{border-color:var(--color-vtd-orange)}.border-vtd-secondary-300{border-color:var(--color-vtd-secondary-300)}.bg-black{background-color:var(--color-black)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-vtd-dark-blue{background-color:var(--color-vtd-dark-blue)}.bg-vtd-dark-blue\\/10{background-color:#1e3a8a1a}@supports (color:color-mix(in lab,red,red)){.bg-vtd-dark-blue\\/10{background-color:color-mix(in oklab,var(--color-vtd-dark-blue)10%,transparent)}}.bg-vtd-medium-gray{background-color:var(--color-vtd-medium-gray)}.bg-vtd-primary-600{background-color:var(--color-vtd-primary-600)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-10{padding:calc(var(--spacing)*10)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-0\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-\\[8px\\]{font-size:8px}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-vtd-blue{color:var(--color-vtd-blue)}.text-vtd-dark-blue{color:var(--color-vtd-dark-blue)}.text-vtd-light-gray{color:var(--color-vtd-light-gray)}.text-vtd-orange{color:var(--color-vtd-orange)}.text-vtd-primary-600{color:var(--color-vtd-primary-600)}.text-vtd-secondary-400{color:var(--color-vtd-secondary-400)}.text-vtd-secondary-700{color:var(--color-vtd-secondary-700)}.text-white{color:var(--color-white)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.placeholder-vtd-secondary-400::placeholder{color:var(--color-vtd-secondary-400)}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-\\[0_2px_8px_0_\\#BEBEBE26\\]{--tw-shadow:0 2px 8px 0 var(--tw-shadow-color,#bebebe26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:bg-vtd-medium-gray:hover{background-color:var(--color-vtd-medium-gray)}.hover\\:bg-vtd-primary-700:hover{background-color:var(--color-vtd-primary-700)}.hover\\:bg-vtd-secondary-50:hover{background-color:var(--color-vtd-secondary-50)}.hover\\:bg-vtd-secondary-100:hover{background-color:var(--color-vtd-secondary-100)}.hover\\:text-vtd-blue:hover{color:var(--color-vtd-blue)}.hover\\:text-vtd-primary-700:hover{color:var(--color-vtd-primary-700)}}.focus\\:border-vtd-primary-300:focus{border-color:var(--color-vtd-primary-300)}.focus\\:bg-vtd-medium-gray:focus{background-color:var(--color-vtd-medium-gray)}.focus\\:text-vtd-primary-600:focus{color:var(--color-vtd-primary-600)}.focus\\:ring:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:#ff77001a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-vtd-orange)10%,transparent)}}.focus\\:ring-vtd-primary-500:focus{--tw-ring-color:var(--color-vtd-primary-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-vtd-light-gray:disabled{color:var(--color-vtd-light-gray)}@media (min-width:40rem){.sm\\:relative{position:relative}.sm\\:static{position:static}.sm\\:z-auto{z-index:auto}.sm\\:order-0{order:0}.sm\\:mx-1{margin-inline:calc(var(--spacing)*1)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:mt-1{margin-top:calc(var(--spacing)*1)}.sm\\:mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.sm\\:mr-2{margin-right:calc(var(--spacing)*2)}.sm\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.sm\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.sm\\:mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.sm\\:ml-2{margin-left:calc(var(--spacing)*2)}.sm\\:ml-3{margin-left:calc(var(--spacing)*3)}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:flex-nowrap{flex-wrap:nowrap}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:border{border-style:var(--tw-border-style);border-width:1px}.sm\\:border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.sm\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.sm\\:px-2{padding-inline:calc(var(--spacing)*2)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.sm\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media (min-width:48rem){.md\\:w-1\\/2{width:50%}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:64rem){.lg\\:mx-0{margin-inline:calc(var(--spacing)*0)}.lg\\:mr-1{margin-right:calc(var(--spacing)*1)}.lg\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:w-80{width:calc(var(--spacing)*80)}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.lg\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.lg\\:p-6{padding:calc(var(--spacing)*6)}.lg\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media (prefers-color-scheme:dark){.dark\\:border-vtd-secondary-700,.dark\\:border-vtd-secondary-700\\/\\[1\\]{border-color:var(--color-vtd-secondary-700)}.dark\\:bg-vtd-secondary-800{background-color:var(--color-vtd-secondary-800)}.dark\\:text-vtd-secondary-100{color:var(--color-vtd-secondary-100)}.dark\\:placeholder-vtd-secondary-500::placeholder{color:var(--color-vtd-secondary-500)}.dark\\:ring-offset-vtd-secondary-800{--tw-ring-offset-color:var(--color-vtd-secondary-800)}.dark\\:focus\\:border-vtd-primary-500:focus{border-color:var(--color-vtd-primary-500)}}}.vtd-datepicker-overlay.open:before{opacity:.5;display:block}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as ft from "vue";
import { watchEffect as $e, ref as J, computed as ie, onMounted as nt, cloneVNode as no, h as ve, Fragment as xe, defineComponent as de, inject as De, provide as re, getCurrentInstance as ao, watch as ut, onUnmounted as tt, Teleport as ro, reactive as wt, shallowRef as so, openBlock as K, createElementBlock as q, createElementVNode as D, withDirectives as me, vShow as pe, toDisplayString as le, renderList as Ge, withModifiers as _e, unref as ue, createCommentVNode as he, createVNode as te, TransitionGroup as lo, withCtx as Ne, normalizeClass as Ve, Transition as jt, nextTick as Ue, isProxy as uo, createBlock as We, renderSlot as pt, mergeProps as io, vModelText as co } from "vue";
var vt;
let mo = Symbol("headlessui.useid"), fo = 0;
const Re = (vt = ft.useId) != null ? vt : function() {
  return ft.inject(mo, () => `${++fo}`)();
};
function H(e) {
  var a;
  if (e == null || e.value == null)
    return null;
  let s = (a = e.value.$el) != null ? a : e.value;
  return s instanceof Node ? s : null;
}
function Te(e, a, ...s) {
  if (e in a) {
    let l = a[e];
    return typeof l == "function" ? l(...s) : l;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, Te), t;
}
var po = Object.defineProperty, vo = (e, a, s) => a in e ? po(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[a] = s, ht = (e, a, s) => (vo(e, typeof a != "symbol" ? a + "" : a, s), s);
let ho = class {
  constructor() {
    ht(this, "current", this.detect()), ht(this, "currentId", 0);
  }
  set(a) {
    this.current !== a && (this.currentId = 0, this.current = a);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, at = new ho();
function Ae(e) {
  if (at.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let a = H(e);
    if (a)
      return a.ownerDocument;
  }
  return document;
}
let it = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Me = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Me || {}), ot = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ot || {}), yo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(yo || {});
function rt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(it)).sort((a, s) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (s.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var mt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(mt || {});
function kt(e, a = 0) {
  var s;
  return e === ((s = Ae(e)) == null ? void 0 : s.body) ? !1 : Te(a, { 0() {
    return e.matches(it);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(it))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
var bo = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(bo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let go = ["textarea", "input"].join(",");
function xo(e) {
  var a, s;
  return (s = (a = e == null ? void 0 : e.matches) == null ? void 0 : a.call(e, go)) != null ? s : !1;
}
function wo(e, a = (s) => s) {
  return e.slice().sort((s, t) => {
    let l = a(s), v = a(t);
    if (l === null || v === null)
      return 0;
    let u = l.compareDocumentPosition(v);
    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(e, a, { sorted: s = !0, relativeTo: t = null, skipElements: l = [] } = {}) {
  var v;
  let u = (v = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? v : document, n = Array.isArray(e) ? s ? wo(e) : e : rt(e);
  l.length > 0 && n.length > 1 && (n = n.filter((N) => !l.includes(N))), t = t ?? u.activeElement;
  let x = (() => {
    if (a & 5)
      return 1;
    if (a & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = (() => {
    if (a & 1)
      return 0;
    if (a & 2)
      return Math.max(0, n.indexOf(t)) - 1;
    if (a & 4)
      return Math.max(0, n.indexOf(t)) + 1;
    if (a & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = a & 32 ? { preventScroll: !0 } : {}, h = 0, g = n.length, P;
  do {
    if (h >= g || h + g <= 0)
      return 0;
    let N = y + h;
    if (a & 16)
      N = (N + g) % g;
    else {
      if (N < 0)
        return 3;
      if (N >= g)
        return 1;
    }
    P = n[N], P == null || P.focus(p), h += x;
  } while (P !== u.activeElement);
  return a & 6 && xo(P) && P.select(), 2;
}
function jo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ko() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $o() {
  return jo() || ko();
}
function Ze(e, a, s) {
  at.isServer || $e((t) => {
    document.addEventListener(e, a, s), t(() => document.removeEventListener(e, a, s));
  });
}
function $t(e, a, s) {
  at.isServer || $e((t) => {
    window.addEventListener(e, a, s), t(() => window.removeEventListener(e, a, s));
  });
}
function _o(e, a, s = ie(() => !0)) {
  function t(v, u) {
    if (!s.value || v.defaultPrevented)
      return;
    let n = u(v);
    if (n === null || !n.getRootNode().contains(n))
      return;
    let x = function y(p) {
      return typeof p == "function" ? y(p()) : Array.isArray(p) || p instanceof Set ? p : [p];
    }(e);
    for (let y of x) {
      if (y === null)
        continue;
      let p = y instanceof HTMLElement ? y : H(y);
      if (p != null && p.contains(n) || v.composed && v.composedPath().includes(p))
        return;
    }
    return !kt(n, mt.Loose) && n.tabIndex !== -1 && v.preventDefault(), a(v, n);
  }
  let l = J(null);
  Ze("pointerdown", (v) => {
    var u, n;
    s.value && (l.value = ((n = (u = v.composedPath) == null ? void 0 : u.call(v)) == null ? void 0 : n[0]) || v.target);
  }, !0), Ze("mousedown", (v) => {
    var u, n;
    s.value && (l.value = ((n = (u = v.composedPath) == null ? void 0 : u.call(v)) == null ? void 0 : n[0]) || v.target);
  }, !0), Ze("click", (v) => {
    $o() || l.value && (t(v, () => l.value), l.value = null);
  }, !0), Ze("touchend", (v) => t(v, () => v.target instanceof HTMLElement ? v.target : null), !0), $t("blur", (v) => t(v, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function yt(e, a) {
  if (e)
    return e;
  let s = a ?? "button";
  if (typeof s == "string" && s.toLowerCase() === "button")
    return "button";
}
function Mo(e, a) {
  let s = J(yt(e.value.type, e.value.as));
  return nt(() => {
    s.value = yt(e.value.type, e.value.as);
  }), $e(() => {
    var t;
    s.value || H(a) && H(a) instanceof HTMLButtonElement && !((t = H(a)) != null && t.hasAttribute("type")) && (s.value = "button");
  }), s;
}
var ze = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ze || {}), So = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(So || {});
function Oe({ visible: e = !0, features: a = 0, ourProps: s, theirProps: t, ...l }) {
  var v;
  let u = Mt(t, s), n = Object.assign(l, { props: u });
  if (e || a & 2 && u.static)
    return lt(n);
  if (a & 1) {
    let x = (v = u.unmount) == null || v ? 0 : 1;
    return Te(x, { 0() {
      return null;
    }, 1() {
      return lt({ ...l, props: { ...u, hidden: !0, style: { display: "none" } } });
    } });
  }
  return lt(n);
}
function lt({ props: e, attrs: a, slots: s, slot: t, name: l }) {
  var v, u;
  let { as: n, ...x } = Do(e, ["unmount", "static"]), y = (v = s.default) == null ? void 0 : v.call(s, t), p = {};
  if (t) {
    let h = !1, g = [];
    for (let [P, N] of Object.entries(t))
      typeof N == "boolean" && (h = !0), N === !0 && g.push(P);
    h && (p["data-headlessui-state"] = g.join(" "));
  }
  if (n === "template") {
    if (y = _t(y ?? []), Object.keys(x).length > 0 || Object.keys(a).length > 0) {
      let [h, ...g] = y ?? [];
      if (!To(h) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(x).concat(Object.keys(a)).map((B) => B.trim()).filter((B, V, E) => E.indexOf(B) === V).sort((B, V) => B.localeCompare(V)).map((B) => `  - ${B}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((B) => `  - ${B}`).join(`
`)].join(`
`));
      let P = Mt((u = h.props) != null ? u : {}, x, p), N = no(h, P, !0);
      for (let B in P)
        B.startsWith("on") && (N.props || (N.props = {}), N.props[B] = P[B]);
      return N;
    }
    return Array.isArray(y) && y.length === 1 ? y[0] : y;
  }
  return ve(n, Object.assign({}, x, p), { default: () => y });
}
function _t(e) {
  return e.flatMap((a) => a.type === xe ? _t(a.children) : [a]);
}
function Mt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let a = {}, s = {};
  for (let t of e)
    for (let l in t)
      l.startsWith("on") && typeof t[l] == "function" ? (s[l] != null || (s[l] = []), s[l].push(t[l])) : a[l] = t[l];
  if (a.disabled || a["aria-disabled"])
    return Object.assign(a, Object.fromEntries(Object.keys(s).map((t) => [t, void 0])));
  for (let t in s)
    Object.assign(a, { [t](l, ...v) {
      let u = s[t];
      for (let n of u) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        n(l, ...v);
      }
    } });
  return a;
}
function Do(e, a = []) {
  let s = Object.assign({}, e);
  for (let t of a)
    t in s && delete s[t];
  return s;
}
function To(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ie = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ie || {});
let Ke = de({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: a, attrs: s }) {
  return () => {
    var t;
    let { features: l, ...v } = e, u = { "aria-hidden": (l & 2) === 2 ? !0 : (t = v["aria-hidden"]) != null ? t : void 0, hidden: (l & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return Oe({ ourProps: u, theirProps: v, slot: {}, attrs: s, slots: a, name: "Hidden" });
  };
} }), St = Symbol("Context");
var Fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Fe || {});
function Dt() {
  return De(St, null);
}
function Oo(e) {
  re(St, e);
}
var Pe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Pe || {});
function Po(e, a, s, t) {
  at.isServer || $e((l) => {
    e = e ?? window, e.addEventListener(a, s, t), l(() => e.removeEventListener(a, s, t));
  });
}
var Se = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Se || {});
function Tt() {
  let e = J(0);
  return $t("keydown", (a) => {
    a.key === "Tab" && (e.value = a.shiftKey ? 1 : 0);
  }), e;
}
function Vo({ defaultContainers: e = [], portals: a, mainTreeNodeRef: s } = {}) {
  let t = J(null), l = Ae(t);
  function v() {
    var u, n, x;
    let y = [];
    for (let p of e)
      p !== null && (p instanceof HTMLElement ? y.push(p) : "value" in p && p.value instanceof HTMLElement && y.push(p.value));
    if (a != null && a.value)
      for (let p of a.value)
        y.push(p);
    for (let p of (u = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? u : [])
      p !== document.body && p !== document.head && p instanceof HTMLElement && p.id !== "headlessui-portal-root" && (p.contains(H(t)) || p.contains((x = (n = H(t)) == null ? void 0 : n.getRootNode()) == null ? void 0 : x.host) || y.some((h) => p.contains(h)) || y.push(p));
    return y;
  }
  return { resolveContainers: v, contains(u) {
    return v().some((n) => n.contains(u));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return s != null ? null : ve(Ke, { features: Ie.Hidden, ref: t });
  } };
}
function Ao() {
  let e = J(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ve(Ke, { features: Ie.Hidden, ref: e });
  } };
}
let Ot = Symbol("ForcePortalRootContext");
function Co() {
  return De(Ot, !1);
}
de({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: a, attrs: s }) {
  return re(Ot, e.force), () => {
    let { force: t, ...l } = e;
    return Oe({ theirProps: l, ourProps: {}, slot: {}, slots: a, attrs: s, name: "ForcePortalRoot" });
  };
} });
function Yo(e) {
  let a = Ae(e);
  if (!a) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let s = a.getElementById("headlessui-portal-root");
  if (s)
    return s;
  let t = a.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), a.body.appendChild(t);
}
const dt = /* @__PURE__ */ new WeakMap();
function Eo(e) {
  var a;
  return (a = dt.get(e)) != null ? a : 0;
}
function bt(e, a) {
  let s = a(Eo(e));
  return s <= 0 ? dt.delete(e) : dt.set(e, s), s;
}
de({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: a, attrs: s }) {
  let t = J(null), l = ie(() => Ae(t)), v = Co(), u = De(Pt, null), n = J(v === !0 || u == null ? Yo(t.value) : u.resolveTarget());
  n.value && bt(n.value, (g) => g + 1);
  let x = J(!1);
  nt(() => {
    x.value = !0;
  }), $e(() => {
    v || u != null && (n.value = u.resolveTarget());
  });
  let y = De(ct, null), p = !1, h = ao();
  return ut(t, () => {
    if (p || !y)
      return;
    let g = H(t);
    g && (tt(y.register(g), h), p = !0);
  }), tt(() => {
    var g, P;
    let N = (g = l.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
    !N || n.value !== N || bt(n.value, (B) => B - 1) || n.value.children.length > 0 || (P = n.value.parentElement) == null || P.removeChild(n.value);
  }), () => {
    if (!x.value || n.value === null)
      return null;
    let g = { ref: t, "data-headlessui-portal": "" };
    return ve(ro, { to: n.value }, Oe({ ourProps: g, theirProps: e, slot: {}, attrs: s, slots: a, name: "Portal" }));
  };
} });
let ct = Symbol("PortalParentContext");
function Fo() {
  let e = De(ct, null), a = J([]);
  function s(v) {
    return a.value.push(v), e && e.register(v), () => t(v);
  }
  function t(v) {
    let u = a.value.indexOf(v);
    u !== -1 && a.value.splice(u, 1), e && e.unregister(v);
  }
  let l = { register: s, unregister: t, portals: a };
  return [a, de({ name: "PortalWrapper", setup(v, { slots: u }) {
    return re(ct, l), () => {
      var n;
      return (n = u.default) == null ? void 0 : n.call(u);
    };
  } })];
}
let Pt = Symbol("PortalGroupContext");
de({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: a, slots: s }) {
  let t = wt({ resolveTarget() {
    return e.target;
  } });
  return re(Pt, t), () => {
    let { target: l, ...v } = e;
    return Oe({ theirProps: v, ourProps: {}, slot: {}, attrs: a, slots: s, name: "PortalGroup" });
  };
} });
var Bo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bo || {});
let Vt = Symbol("PopoverContext");
function st(e) {
  let a = De(Vt, null);
  if (a === null) {
    let s = new Error(`<${e} /> is missing a parent <${Et.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, st), s;
  }
  return a;
}
let At = Symbol("PopoverGroupContext");
function Ct() {
  return De(At, null);
}
let Yt = Symbol("PopoverPanelContext");
function Lo() {
  return De(Yt, null);
}
let Et = de({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: a, attrs: s, expose: t }) {
  var l;
  let v = J(null);
  t({ el: v, $el: v });
  let u = J(1), n = J(null), x = J(null), y = J(null), p = J(null), h = ie(() => Ae(v)), g = ie(() => {
    var j, O;
    if (!H(n) || !H(p))
      return !1;
    for (let Z of document.querySelectorAll("body > *"))
      if (Number(Z == null ? void 0 : Z.contains(H(n))) ^ Number(Z == null ? void 0 : Z.contains(H(p))))
        return !0;
    let r = rt(), o = r.indexOf(H(n)), L = (o + r.length - 1) % r.length, F = (o + 1) % r.length, _ = r[L], G = r[F];
    return !((j = H(p)) != null && j.contains(_)) && !((O = H(p)) != null && O.contains(G));
  }), P = { popoverState: u, buttonId: J(null), panelId: J(null), panel: p, button: n, isPortalled: g, beforePanelSentinel: x, afterPanelSentinel: y, togglePopover() {
    u.value = Te(u.value, { 0: 1, 1: 0 });
  }, closePopover() {
    u.value !== 1 && (u.value = 1);
  }, close(j) {
    P.closePopover();
    let O = (() => j ? j instanceof HTMLElement ? j : j.value instanceof HTMLElement ? H(j) : H(P.button) : H(P.button))();
    O == null || O.focus();
  } };
  re(Vt, P), Oo(ie(() => Te(u.value, { 0: Fe.Open, 1: Fe.Closed })));
  let N = { buttonId: P.buttonId, panelId: P.panelId, close() {
    P.closePopover();
  } }, B = Ct(), V = B == null ? void 0 : B.registerPopover, [E, M] = Fo(), k = Vo({ mainTreeNodeRef: B == null ? void 0 : B.mainTreeNodeRef, portals: E, defaultContainers: [n, p] });
  function T() {
    var j, O, r, o;
    return (o = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? o : ((j = h.value) == null ? void 0 : j.activeElement) && (((O = H(n)) == null ? void 0 : O.contains(h.value.activeElement)) || ((r = H(p)) == null ? void 0 : r.contains(h.value.activeElement)));
  }
  return $e(() => V == null ? void 0 : V(N)), Po((l = h.value) == null ? void 0 : l.defaultView, "focus", (j) => {
    var O, r;
    j.target !== window && j.target instanceof HTMLElement && u.value === 0 && (T() || n && p && (k.contains(j.target) || (O = H(P.beforePanelSentinel)) != null && O.contains(j.target) || (r = H(P.afterPanelSentinel)) != null && r.contains(j.target) || P.closePopover()));
  }, !0), _o(k.resolveContainers, (j, O) => {
    var r;
    P.closePopover(), kt(O, mt.Loose) || (j.preventDefault(), (r = H(n)) == null || r.focus());
  }, ie(() => u.value === 0)), () => {
    let j = { open: u.value === 0, close: P.close };
    return ve(xe, [ve(M, {}, () => Oe({ theirProps: { ...e, ...s }, ourProps: { ref: v }, slot: j, slots: a, attrs: s, name: "Popover" })), ve(k.MainTreeNode)]);
  };
} }), No = de({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: a, slots: s, expose: t }) {
  var l;
  let v = (l = e.id) != null ? l : `headlessui-popover-button-${Re()}`, u = st("PopoverButton"), n = ie(() => Ae(u.button));
  t({ el: u.button, $el: u.button }), nt(() => {
    u.buttonId.value = v;
  }), tt(() => {
    u.buttonId.value = null;
  });
  let x = Ct(), y = x == null ? void 0 : x.closeOthers, p = Lo(), h = ie(() => p === null ? !1 : p.value === u.panelId.value), g = J(null), P = `headlessui-focus-sentinel-${Re()}`;
  h.value || $e(() => {
    u.button.value = H(g);
  });
  let N = Mo(ie(() => ({ as: e.as, type: a.type })), g);
  function B(j) {
    var O, r, o, L, F;
    if (h.value) {
      if (u.popoverState.value === 1)
        return;
      switch (j.key) {
        case Pe.Space:
        case Pe.Enter:
          j.preventDefault(), (r = (O = j.target).click) == null || r.call(O), u.closePopover(), (o = H(u.button)) == null || o.focus();
          break;
      }
    } else
      switch (j.key) {
        case Pe.Space:
        case Pe.Enter:
          j.preventDefault(), j.stopPropagation(), u.popoverState.value === 1 && (y == null || y(u.buttonId.value)), u.togglePopover();
          break;
        case Pe.Escape:
          if (u.popoverState.value !== 0)
            return y == null ? void 0 : y(u.buttonId.value);
          if (!H(u.button) || (L = n.value) != null && L.activeElement && !((F = H(u.button)) != null && F.contains(n.value.activeElement)))
            return;
          j.preventDefault(), j.stopPropagation(), u.closePopover();
          break;
      }
  }
  function V(j) {
    h.value || j.key === Pe.Space && j.preventDefault();
  }
  function E(j) {
    var O, r;
    e.disabled || (h.value ? (u.closePopover(), (O = H(u.button)) == null || O.focus()) : (j.preventDefault(), j.stopPropagation(), u.popoverState.value === 1 && (y == null || y(u.buttonId.value)), u.togglePopover(), (r = H(u.button)) == null || r.focus()));
  }
  function M(j) {
    j.preventDefault(), j.stopPropagation();
  }
  let k = Tt();
  function T() {
    let j = H(u.panel);
    if (!j)
      return;
    function O() {
      Te(k.value, { [Se.Forwards]: () => Ee(j, Me.First), [Se.Backwards]: () => Ee(j, Me.Last) }) === ot.Error && Ee(rt().filter((r) => r.dataset.headlessuiFocusGuard !== "true"), Te(k.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(u.button) });
    }
    O();
  }
  return () => {
    let j = u.popoverState.value === 0, O = { open: j }, { ...r } = e, o = h.value ? { ref: g, type: N.value, onKeydown: B, onClick: E } : { ref: g, id: v, type: N.value, "aria-expanded": u.popoverState.value === 0, "aria-controls": H(u.panel) ? u.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: B, onKeyup: V, onClick: E, onMousedown: M };
    return ve(xe, [Oe({ ourProps: o, theirProps: { ...a, ...r }, slot: O, attrs: a, slots: s, name: "PopoverButton" }), j && !h.value && u.isPortalled.value && ve(Ke, { id: P, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: T })]);
  };
} }), Ro = de({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: a, slots: s }) {
  let t = st("PopoverOverlay"), l = `headlessui-popover-overlay-${Re()}`, v = Dt(), u = ie(() => v !== null ? (v.value & Fe.Open) === Fe.Open : t.popoverState.value === 0);
  function n() {
    t.closePopover();
  }
  return () => {
    let x = { open: t.popoverState.value === 0 };
    return Oe({ ourProps: { id: l, "aria-hidden": !0, onClick: n }, theirProps: e, slot: x, attrs: a, slots: s, features: ze.RenderStrategy | ze.Static, visible: u.value, name: "PopoverOverlay" });
  };
} }), Io = de({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: a, slots: s, expose: t }) {
  var l;
  let v = (l = e.id) != null ? l : `headlessui-popover-panel-${Re()}`, { focus: u } = e, n = st("PopoverPanel"), x = ie(() => Ae(n.panel)), y = `headlessui-focus-sentinel-before-${Re()}`, p = `headlessui-focus-sentinel-after-${Re()}`;
  t({ el: n.panel, $el: n.panel }), nt(() => {
    n.panelId.value = v;
  }), tt(() => {
    n.panelId.value = null;
  }), re(Yt, n.panelId), $e(() => {
    var M, k;
    if (!u || n.popoverState.value !== 0 || !n.panel)
      return;
    let T = (M = x.value) == null ? void 0 : M.activeElement;
    (k = H(n.panel)) != null && k.contains(T) || Ee(H(n.panel), Me.First);
  });
  let h = Dt(), g = ie(() => h !== null ? (h.value & Fe.Open) === Fe.Open : n.popoverState.value === 0);
  function P(M) {
    var k, T;
    switch (M.key) {
      case Pe.Escape:
        if (n.popoverState.value !== 0 || !H(n.panel) || x.value && !((k = H(n.panel)) != null && k.contains(x.value.activeElement)))
          return;
        M.preventDefault(), M.stopPropagation(), n.closePopover(), (T = H(n.button)) == null || T.focus();
        break;
    }
  }
  function N(M) {
    var k, T, j, O, r;
    let o = M.relatedTarget;
    o && H(n.panel) && ((k = H(n.panel)) != null && k.contains(o) || (n.closePopover(), ((j = (T = H(n.beforePanelSentinel)) == null ? void 0 : T.contains) != null && j.call(T, o) || (r = (O = H(n.afterPanelSentinel)) == null ? void 0 : O.contains) != null && r.call(O, o)) && o.focus({ preventScroll: !0 })));
  }
  let B = Tt();
  function V() {
    let M = H(n.panel);
    if (!M)
      return;
    function k() {
      Te(B.value, { [Se.Forwards]: () => {
        var T;
        Ee(M, Me.First) === ot.Error && ((T = H(n.afterPanelSentinel)) == null || T.focus());
      }, [Se.Backwards]: () => {
        var T;
        (T = H(n.button)) == null || T.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function E() {
    let M = H(n.panel);
    if (!M)
      return;
    function k() {
      Te(B.value, { [Se.Forwards]: () => {
        let T = H(n.button), j = H(n.panel);
        if (!T)
          return;
        let O = rt(), r = O.indexOf(T), o = O.slice(0, r + 1), L = [...O.slice(r + 1), ...o];
        for (let F of L.slice())
          if (F.dataset.headlessuiFocusGuard === "true" || j != null && j.contains(F)) {
            let _ = L.indexOf(F);
            _ !== -1 && L.splice(_, 1);
          }
        Ee(L, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var T;
        Ee(M, Me.Previous) === ot.Error && ((T = H(n.button)) == null || T.focus());
      } });
    }
    k();
  }
  return () => {
    let M = { open: n.popoverState.value === 0, close: n.close }, { focus: k, ...T } = e, j = { ref: n.panel, id: v, onKeydown: P, onFocusout: u && n.popoverState.value === 0 ? N : void 0, tabIndex: -1 };
    return Oe({ ourProps: j, theirProps: { ...a, ...T }, attrs: a, slot: M, slots: { ...s, default: (...O) => {
      var r;
      return [ve(xe, [g.value && n.isPortalled.value && ve(Ke, { id: y, ref: n.beforePanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (r = s.default) == null ? void 0 : r.call(s, ...O), g.value && n.isPortalled.value && ve(Ke, { id: p, ref: n.afterPanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })])];
    } }, features: ze.RenderStrategy | ze.Static, visible: g.value, name: "PopoverPanel" });
  };
} });
de({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: a, slots: s, expose: t }) {
  let l = J(null), v = so([]), u = ie(() => Ae(l)), n = Ao();
  t({ el: l, $el: l });
  function x(g) {
    let P = v.value.indexOf(g);
    P !== -1 && v.value.splice(P, 1);
  }
  function y(g) {
    return v.value.push(g), () => {
      x(g);
    };
  }
  function p() {
    var g;
    let P = u.value;
    if (!P)
      return !1;
    let N = P.activeElement;
    return (g = H(l)) != null && g.contains(N) ? !0 : v.value.some((B) => {
      var V, E;
      return ((V = P.getElementById(B.buttonId.value)) == null ? void 0 : V.contains(N)) || ((E = P.getElementById(B.panelId.value)) == null ? void 0 : E.contains(N));
    });
  }
  function h(g) {
    for (let P of v.value)
      P.buttonId.value !== g && P.close();
  }
  return re(At, { registerPopover: y, unregisterPopover: x, isFocusWithinPopoverGroup: p, closeOthers: h, mainTreeNodeRef: n.mainTreeNodeRef }), () => ve(xe, [Oe({ ourProps: { ref: l }, theirProps: { ...e, ...a }, slot: {}, attrs: a, slots: s, name: "PopoverGroup" }), ve(n.MainTreeNode)]);
} });
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = 1e3, t = 6e4, l = 36e5, v = "millisecond", u = "second", n = "minute", x = "hour", y = "day", p = "week", h = "month", g = "quarter", P = "year", N = "date", B = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var b = ["th", "st", "nd", "rd"], $ = A % 100;
      return "[" + A + (b[($ - 20) % 10] || b[$] || b[0]) + "]";
    } }, k = function(A, b, $) {
      var C = String(A);
      return !C || C.length >= b ? A : "" + Array(b + 1 - C.length).join($) + A;
    }, T = { s: k, z: function(A) {
      var b = -A.utcOffset(), $ = Math.abs(b), C = Math.floor($ / 60), S = $ % 60;
      return (b <= 0 ? "+" : "-") + k(C, 2, "0") + ":" + k(S, 2, "0");
    }, m: function A(b, $) {
      if (b.date() < $.date())
        return -A($, b);
      var C = 12 * ($.year() - b.year()) + ($.month() - b.month()), S = b.clone().add(C, h), I = $ - S < 0, R = b.clone().add(C + (I ? -1 : 1), h);
      return +(-(C + ($ - S) / (I ? S - R : R - S)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: h, y: P, w: p, d: y, D: N, h: x, m: n, s: u, ms: v, Q: g }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, j = "en", O = {};
    O[j] = M;
    var r = "$isDayjsObject", o = function(A) {
      return A instanceof G || !(!A || !A[r]);
    }, L = function A(b, $, C) {
      var S;
      if (!b)
        return j;
      if (typeof b == "string") {
        var I = b.toLowerCase();
        O[I] && (S = I), $ && (O[I] = $, S = I);
        var R = b.split("-");
        if (!S && R.length > 1)
          return A(R[0]);
      } else {
        var U = b.name;
        O[U] = b, S = U;
      }
      return !C && S && (j = S), S || !C && j;
    }, F = function(A, b) {
      if (o(A))
        return A.clone();
      var $ = typeof b == "object" ? b : {};
      return $.date = A, $.args = arguments, new G($);
    }, _ = T;
    _.l = L, _.i = o, _.w = function(A, b) {
      return F(A, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var G = function() {
      function A($) {
        this.$L = L($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[r] = !0;
      }
      var b = A.prototype;
      return b.parse = function($) {
        this.$d = function(C) {
          var S = C.date, I = C.utc;
          if (S === null)
            return /* @__PURE__ */ new Date(NaN);
          if (_.u(S))
            return /* @__PURE__ */ new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var R = S.match(V);
            if (R) {
              var U = R[2] - 1 || 0, X = (R[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, X)) : new Date(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, X);
            }
          }
          return new Date(S);
        }($), this.init();
      }, b.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, b.$utils = function() {
        return _;
      }, b.isValid = function() {
        return this.$d.toString() !== B;
      }, b.isSame = function($, C) {
        var S = F($);
        return this.startOf(C) <= S && S <= this.endOf(C);
      }, b.isAfter = function($, C) {
        return F($) < this.startOf(C);
      }, b.isBefore = function($, C) {
        return this.endOf(C) < F($);
      }, b.$g = function($, C, S) {
        return _.u($) ? this[C] : this.set(S, $);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function($, C) {
        var S = this, I = !!_.u(C) || C, R = _.p($), U = function(ye, ne) {
          var fe = _.w(S.$u ? Date.UTC(S.$y, ne, ye) : new Date(S.$y, ne, ye), S);
          return I ? fe : fe.endOf(y);
        }, X = function(ye, ne) {
          return _.w(S.toDate()[ye].apply(S.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), S);
        }, ee = this.$W, oe = this.$M, ce = this.$D, we = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case P:
            return I ? U(1, 0) : U(31, 11);
          case h:
            return I ? U(1, oe) : U(0, oe + 1);
          case p:
            var se = this.$locale().weekStart || 0, je = (ee < se ? ee + 7 : ee) - se;
            return U(I ? ce - je : ce + (6 - je), oe);
          case y:
          case N:
            return X(we + "Hours", 0);
          case x:
            return X(we + "Minutes", 1);
          case n:
            return X(we + "Seconds", 2);
          case u:
            return X(we + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function($) {
        return this.startOf($, !1);
      }, b.$set = function($, C) {
        var S, I = _.p($), R = "set" + (this.$u ? "UTC" : ""), U = (S = {}, S[y] = R + "Date", S[N] = R + "Date", S[h] = R + "Month", S[P] = R + "FullYear", S[x] = R + "Hours", S[n] = R + "Minutes", S[u] = R + "Seconds", S[v] = R + "Milliseconds", S)[I], X = I === y ? this.$D + (C - this.$W) : C;
        if (I === h || I === P) {
          var ee = this.clone().set(N, 1);
          ee.$d[U](X), ee.init(), this.$d = ee.set(N, Math.min(this.$D, ee.daysInMonth())).$d;
        } else
          U && this.$d[U](X);
        return this.init(), this;
      }, b.set = function($, C) {
        return this.clone().$set($, C);
      }, b.get = function($) {
        return this[_.p($)]();
      }, b.add = function($, C) {
        var S, I = this;
        $ = Number($);
        var R = _.p(C), U = function(oe) {
          var ce = F(I);
          return _.w(ce.date(ce.date() + Math.round(oe * $)), I);
        };
        if (R === h)
          return this.set(h, this.$M + $);
        if (R === P)
          return this.set(P, this.$y + $);
        if (R === y)
          return U(1);
        if (R === p)
          return U(7);
        var X = (S = {}, S[n] = t, S[x] = l, S[u] = s, S)[R] || 1, ee = this.$d.getTime() + $ * X;
        return _.w(ee, this);
      }, b.subtract = function($, C) {
        return this.add(-1 * $, C);
      }, b.format = function($) {
        var C = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || B;
        var I = $ || "YYYY-MM-DDTHH:mm:ssZ", R = _.z(this), U = this.$H, X = this.$m, ee = this.$M, oe = S.weekdays, ce = S.months, we = S.meridiem, se = function(ne, fe, be, ke) {
          return ne && (ne[fe] || ne(C, I)) || be[fe].slice(0, ke);
        }, je = function(ne) {
          return _.s(U % 12 || 12, ne, "0");
        }, ye = we || function(ne, fe, be) {
          var ke = ne < 12 ? "AM" : "PM";
          return be ? ke.toLowerCase() : ke;
        };
        return I.replace(E, function(ne, fe) {
          return fe || function(be) {
            switch (be) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return _.s(C.$y, 4, "0");
              case "M":
                return ee + 1;
              case "MM":
                return _.s(ee + 1, 2, "0");
              case "MMM":
                return se(S.monthsShort, ee, ce, 3);
              case "MMMM":
                return se(ce, ee);
              case "D":
                return C.$D;
              case "DD":
                return _.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return se(S.weekdaysMin, C.$W, oe, 2);
              case "ddd":
                return se(S.weekdaysShort, C.$W, oe, 3);
              case "dddd":
                return oe[C.$W];
              case "H":
                return String(U);
              case "HH":
                return _.s(U, 2, "0");
              case "h":
                return je(1);
              case "hh":
                return je(2);
              case "a":
                return ye(U, X, !0);
              case "A":
                return ye(U, X, !1);
              case "m":
                return String(X);
              case "mm":
                return _.s(X, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return _.s(C.$s, 2, "0");
              case "SSS":
                return _.s(C.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(ne) || R.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function($, C, S) {
        var I, R = this, U = _.p(C), X = F($), ee = (X.utcOffset() - this.utcOffset()) * t, oe = this - X, ce = function() {
          return _.m(R, X);
        };
        switch (U) {
          case P:
            I = ce() / 12;
            break;
          case h:
            I = ce();
            break;
          case g:
            I = ce() / 3;
            break;
          case p:
            I = (oe - ee) / 6048e5;
            break;
          case y:
            I = (oe - ee) / 864e5;
            break;
          case x:
            I = oe / l;
            break;
          case n:
            I = oe / t;
            break;
          case u:
            I = oe / s;
            break;
          default:
            I = oe;
        }
        return S ? I : _.a(I);
      }, b.daysInMonth = function() {
        return this.endOf(h).$D;
      }, b.$locale = function() {
        return O[this.$L];
      }, b.locale = function($, C) {
        if (!$)
          return this.$L;
        var S = this.clone(), I = L($, C, !0);
        return I && (S.$L = I), S;
      }, b.clone = function() {
        return _.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), Z = G.prototype;
    return F.prototype = Z, [["$ms", v], ["$s", u], ["$m", n], ["$H", x], ["$W", y], ["$M", h], ["$y", P], ["$D", N]].forEach(function(A) {
      Z[A[1]] = function(b) {
        return this.$g(b, A[0], A[1]);
      };
    }), F.extend = function(A, b) {
      return A.$i || (A(b, G, F), A.$i = !0), F;
    }, F.locale = L, F.isDayjs = o, F.unix = function(A) {
      return F(1e3 * A);
    }, F.en = O[j], F.Ls = O, F.p = {}, F;
  });
})(Ft);
var Ho = Ft.exports;
const c = /* @__PURE__ */ Ye(Ho);
var Bt = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      var v = t.prototype, u = function(h) {
        return h && (h.indexOf ? h : h.s);
      }, n = function(h, g, P, N, B) {
        var V = h.name ? h : h.$locale(), E = u(V[g]), M = u(V[P]), k = E || M.map(function(j) {
          return j.slice(0, N);
        });
        if (!B)
          return k;
        var T = V.weekStart;
        return k.map(function(j, O) {
          return k[(O + (T || 0)) % 7];
        });
      }, x = function() {
        return l.Ls[l.locale()];
      }, y = function(h, g) {
        return h.formats[g] || function(P) {
          return P.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, B, V) {
            return B || V.slice(1);
          });
        }(h.formats[g.toUpperCase()]);
      }, p = function() {
        var h = this;
        return { months: function(g) {
          return g ? g.format("MMMM") : n(h, "months");
        }, monthsShort: function(g) {
          return g ? g.format("MMM") : n(h, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return h.$locale().weekStart || 0;
        }, weekdays: function(g) {
          return g ? g.format("dddd") : n(h, "weekdays");
        }, weekdaysMin: function(g) {
          return g ? g.format("dd") : n(h, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(g) {
          return g ? g.format("ddd") : n(h, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(g) {
          return y(h.$locale(), g);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      v.localeData = function() {
        return p.bind(this)();
      }, l.localeData = function() {
        var h = x();
        return { firstDayOfWeek: function() {
          return h.weekStart || 0;
        }, weekdays: function() {
          return l.weekdays();
        }, weekdaysShort: function() {
          return l.weekdaysShort();
        }, weekdaysMin: function() {
          return l.weekdaysMin();
        }, months: function() {
          return l.months();
        }, monthsShort: function() {
          return l.monthsShort();
        }, longDateFormat: function(g) {
          return y(h, g);
        }, meridiem: h.meridiem, ordinal: h.ordinal };
      }, l.months = function() {
        return n(x(), "months");
      }, l.monthsShort = function() {
        return n(x(), "monthsShort", "months", 3);
      }, l.weekdays = function(h) {
        return n(x(), "weekdays", null, null, h);
      }, l.weekdaysShort = function(h) {
        return n(x(), "weekdaysShort", "weekdays", 3, h);
      }, l.weekdaysMin = function(h) {
        return n(x(), "weekdaysMin", "weekdays", 2, h);
      };
    };
  });
})(Bt);
var Uo = Bt.exports;
const Wo = /* @__PURE__ */ Ye(Uo);
var Lt = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, l, v) {
      var u = l.prototype, n = u.format;
      v.en.formats = s, u.format = function(x) {
        x === void 0 && (x = "YYYY-MM-DDTHH:mm:ssZ");
        var y = this.$locale().formats, p = function(h, g) {
          return h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, N, B) {
            var V = B && B.toUpperCase();
            return N || g[B] || s[B] || g[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, M, k) {
              return M || k.slice(1);
            });
          });
        }(x, y === void 0 ? {} : y);
        return n.call(this, p);
      };
    };
  });
})(Lt);
var zo = Lt.exports;
const Ko = /* @__PURE__ */ Ye(zo);
var Nt = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, v = /\d\d/, u = /\d\d?/, n = /\d*[^-_:/,()\s\d]+/, x = {}, y = function(V) {
      return (V = +V) + (V > 68 ? 1900 : 2e3);
    }, p = function(V) {
      return function(E) {
        this[V] = +E;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(V) {
      (this.zone || (this.zone = {})).offset = function(E) {
        if (!E || E === "Z")
          return 0;
        var M = E.match(/([+-]|\d\d)/g), k = 60 * M[1] + (+M[2] || 0);
        return k === 0 ? 0 : M[0] === "+" ? -k : k;
      }(V);
    }], g = function(V) {
      var E = x[V];
      return E && (E.indexOf ? E : E.s.concat(E.f));
    }, P = function(V, E) {
      var M, k = x.meridiem;
      if (k) {
        for (var T = 1; T <= 24; T += 1)
          if (V.indexOf(k(T, 0, E)) > -1) {
            M = T > 12;
            break;
          }
      } else
        M = V === (E ? "pm" : "PM");
      return M;
    }, N = { A: [n, function(V) {
      this.afternoon = P(V, !1);
    }], a: [n, function(V) {
      this.afternoon = P(V, !0);
    }], Q: [l, function(V) {
      this.month = 3 * (V - 1) + 1;
    }], S: [l, function(V) {
      this.milliseconds = 100 * +V;
    }], SS: [v, function(V) {
      this.milliseconds = 10 * +V;
    }], SSS: [/\d{3}/, function(V) {
      this.milliseconds = +V;
    }], s: [u, p("seconds")], ss: [u, p("seconds")], m: [u, p("minutes")], mm: [u, p("minutes")], H: [u, p("hours")], h: [u, p("hours")], HH: [u, p("hours")], hh: [u, p("hours")], D: [u, p("day")], DD: [v, p("day")], Do: [n, function(V) {
      var E = x.ordinal, M = V.match(/\d+/);
      if (this.day = M[0], E)
        for (var k = 1; k <= 31; k += 1)
          E(k).replace(/\[|\]/g, "") === V && (this.day = k);
    }], w: [u, p("week")], ww: [v, p("week")], M: [u, p("month")], MM: [v, p("month")], MMM: [n, function(V) {
      var E = g("months"), M = (g("monthsShort") || E.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(V) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], MMMM: [n, function(V) {
      var E = g("months").indexOf(V) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], Y: [/[+-]?\d+/, p("year")], YY: [v, function(V) {
      this.year = y(V);
    }], YYYY: [/\d{4}/, p("year")], Z: h, ZZ: h };
    function B(V) {
      var E, M;
      E = V, M = x && x.formats;
      for (var k = (V = E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, _, G) {
        var Z = G && G.toUpperCase();
        return _ || M[G] || s[G] || M[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, b, $) {
          return b || $.slice(1);
        });
      })).match(t), T = k.length, j = 0; j < T; j += 1) {
        var O = k[j], r = N[O], o = r && r[0], L = r && r[1];
        k[j] = L ? { regex: o, parser: L } : O.replace(/^\[|\]$/g, "");
      }
      return function(F) {
        for (var _ = {}, G = 0, Z = 0; G < T; G += 1) {
          var A = k[G];
          if (typeof A == "string")
            Z += A.length;
          else {
            var b = A.regex, $ = A.parser, C = F.slice(Z), S = b.exec(C)[0];
            $.call(_, S), F = F.replace(S, "");
          }
        }
        return function(I) {
          var R = I.afternoon;
          if (R !== void 0) {
            var U = I.hours;
            R ? U < 12 && (I.hours += 12) : U === 12 && (I.hours = 0), delete I.afternoon;
          }
        }(_), _;
      };
    }
    return function(V, E, M) {
      M.p.customParseFormat = !0, V && V.parseTwoDigitYear && (y = V.parseTwoDigitYear);
      var k = E.prototype, T = k.parse;
      k.parse = function(j) {
        var O = j.date, r = j.utc, o = j.args;
        this.$u = r;
        var L = o[1];
        if (typeof L == "string") {
          var F = o[2] === !0, _ = o[3] === !0, G = F || _, Z = o[2];
          _ && (Z = o[2]), x = this.$locale(), !F && Z && (x = M.Ls[Z]), this.$d = function(C, S, I, R) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * C);
              var U = B(S)(C), X = U.year, ee = U.month, oe = U.day, ce = U.hours, we = U.minutes, se = U.seconds, je = U.milliseconds, ye = U.zone, ne = U.week, fe = /* @__PURE__ */ new Date(), be = oe || (X || ee ? 1 : fe.getDate()), ke = X || fe.getFullYear(), Be = 0;
              X && !ee || (Be = ee > 0 ? ee - 1 : fe.getMonth());
              var Le, He = ce || 0, f = we || 0, i = se || 0, m = je || 0;
              return ye ? new Date(Date.UTC(ke, Be, be, He, f, i, m + 60 * ye.offset * 1e3)) : I ? new Date(Date.UTC(ke, Be, be, He, f, i, m)) : (Le = new Date(ke, Be, be, He, f, i, m), ne && (Le = R(Le).week(ne).toDate()), Le);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(O, L, r, M), this.init(), Z && Z !== !0 && (this.$L = this.locale(Z).$L), G && O != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), x = {};
        } else if (L instanceof Array)
          for (var A = L.length, b = 1; b <= A; b += 1) {
            o[1] = L[b - 1];
            var $ = M.apply(this, o);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            b === A && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          T.call(this, j);
      };
    };
  });
})(Nt);
var Go = Nt.exports;
const Zo = /* @__PURE__ */ Ye(Go);
var Rt = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      t.prototype.isToday = function() {
        var v = "YYYY-MM-DD", u = l();
        return this.format(v) === u.format(v);
      };
    };
  });
})(Rt);
var qo = Rt.exports;
const Jo = /* @__PURE__ */ Ye(qo);
var It = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      t.prototype.isBetween = function(v, u, n, x) {
        var y = l(v), p = l(u), h = (x = x || "()")[0] === "(", g = x[1] === ")";
        return (h ? this.isAfter(y, n) : !this.isBefore(y, n)) && (g ? this.isBefore(p, n) : !this.isAfter(p, n)) || (h ? this.isBefore(y, n) : !this.isAfter(y, n)) && (g ? this.isAfter(p, n) : !this.isBefore(p, n));
      };
    };
  });
})(It);
var Xo = It.exports;
const Qo = /* @__PURE__ */ Ye(Xo);
var Ht = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s, t, l = 1e3, v = 6e4, u = 36e5, n = 864e5, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = 31536e6, p = 2628e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: y, months: p, days: n, hours: u, minutes: v, seconds: l, milliseconds: 1, weeks: 6048e5 }, P = function(O) {
      return O instanceof T;
    }, N = function(O, r, o) {
      return new T(O, o, r.$l);
    }, B = function(O) {
      return t.p(O) + "s";
    }, V = function(O) {
      return O < 0;
    }, E = function(O) {
      return V(O) ? Math.ceil(O) : Math.floor(O);
    }, M = function(O) {
      return Math.abs(O);
    }, k = function(O, r) {
      return O ? V(O) ? { negative: !0, format: "" + M(O) + r } : { negative: !1, format: "" + O + r } : { negative: !1, format: "" };
    }, T = function() {
      function O(o, L, F) {
        var _ = this;
        if (this.$d = {}, this.$l = F, o === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), L)
          return N(o * g[B(L)], this);
        if (typeof o == "number")
          return this.$ms = o, this.parseFromMilliseconds(), this;
        if (typeof o == "object")
          return Object.keys(o).forEach(function(A) {
            _.$d[B(A)] = o[A];
          }), this.calMilliseconds(), this;
        if (typeof o == "string") {
          var G = o.match(h);
          if (G) {
            var Z = G.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = Z[0], this.$d.months = Z[1], this.$d.weeks = Z[2], this.$d.days = Z[3], this.$d.hours = Z[4], this.$d.minutes = Z[5], this.$d.seconds = Z[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = O.prototype;
      return r.calMilliseconds = function() {
        var o = this;
        this.$ms = Object.keys(this.$d).reduce(function(L, F) {
          return L + (o.$d[F] || 0) * g[F];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var o = this.$ms;
        this.$d.years = E(o / y), o %= y, this.$d.months = E(o / p), o %= p, this.$d.days = E(o / n), o %= n, this.$d.hours = E(o / u), o %= u, this.$d.minutes = E(o / v), o %= v, this.$d.seconds = E(o / l), o %= l, this.$d.milliseconds = o;
      }, r.toISOString = function() {
        var o = k(this.$d.years, "Y"), L = k(this.$d.months, "M"), F = +this.$d.days || 0;
        this.$d.weeks && (F += 7 * this.$d.weeks);
        var _ = k(F, "D"), G = k(this.$d.hours, "H"), Z = k(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3, A = Math.round(1e3 * A) / 1e3);
        var b = k(A, "S"), $ = o.negative || L.negative || _.negative || G.negative || Z.negative || b.negative, C = G.format || Z.format || b.format ? "T" : "", S = ($ ? "-" : "") + "P" + o.format + L.format + _.format + C + G.format + Z.format + b.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(o) {
        var L = o || "YYYY-MM-DDTHH:mm:ss", F = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return L.replace(x, function(_, G) {
          return G || String(F[_]);
        });
      }, r.as = function(o) {
        return this.$ms / g[B(o)];
      }, r.get = function(o) {
        var L = this.$ms, F = B(o);
        return F === "milliseconds" ? L %= 1e3 : L = F === "weeks" ? E(L / g[F]) : this.$d[F], L || 0;
      }, r.add = function(o, L, F) {
        var _;
        return _ = L ? o * g[B(L)] : P(o) ? o.$ms : N(o, this).$ms, N(this.$ms + _ * (F ? -1 : 1), this);
      }, r.subtract = function(o, L) {
        return this.add(o, L, !0);
      }, r.locale = function(o) {
        var L = this.clone();
        return L.$l = o, L;
      }, r.clone = function() {
        return N(this.$ms, this);
      }, r.humanize = function(o) {
        return s().add(this.$ms, "ms").locale(this.$l).fromNow(!o);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, O;
    }(), j = function(O, r, o) {
      return O.add(r.years() * o, "y").add(r.months() * o, "M").add(r.days() * o, "d").add(r.hours() * o, "h").add(r.minutes() * o, "m").add(r.seconds() * o, "s").add(r.milliseconds() * o, "ms");
    };
    return function(O, r, o) {
      s = o, t = o().$utils(), o.duration = function(_, G) {
        var Z = o.locale();
        return N(_, { $l: Z }, G);
      }, o.isDuration = P;
      var L = r.prototype.add, F = r.prototype.subtract;
      r.prototype.add = function(_, G) {
        return P(_) ? j(this, _, 1) : L.bind(this)(_, G);
      }, r.prototype.subtract = function(_, G) {
        return P(_) ? j(this, _, -1) : F.bind(this)(_, G);
      };
    };
  });
})(Ht);
var en = Ht.exports;
const tn = /* @__PURE__ */ Ye(en);
var Ut = { exports: {} };
(function(e, a) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = "week", t = "year";
    return function(l, v, u) {
      var n = v.prototype;
      n.week = function(x) {
        if (x === void 0 && (x = null), x !== null)
          return this.add(7 * (x - this.week()), "day");
        var y = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var p = u(this).startOf(t).add(1, t).date(y), h = u(this).endOf(s);
          if (p.isBefore(h))
            return 1;
        }
        var g = u(this).startOf(t).date(y).startOf(s).subtract(1, "millisecond"), P = this.diff(g, s, !0);
        return P < 0 ? u(this).startOf("week").week() : Math.ceil(P);
      }, n.weeks = function(x) {
        return x === void 0 && (x = null), this.week(x);
      };
    };
  });
})(Ut);
var on = Ut.exports;
const nn = /* @__PURE__ */ Ye(on);
function ge(e, a) {
  const s = De(e, a);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const gt = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-2a82d0f4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-8c0cc01b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-406145d9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-3c1144ee.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-a066127b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-e14bb9af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-68978c39.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-e8e3af02.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, a]) => {
      var s;
      return [(s = e.match(/([\w-]*)\.js$/)) == null ? void 0 : s[1], a];
    }
  )
), an = { class: "flex justify-between items-center px-2 py-1.5" }, rn = { class: "shrink-0" }, sn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ln = ["d"], un = { class: "px-1.5 space-x-1.5 flex flex-1" }, dn = { class: "flex-1 flex rounded-md" }, cn = ["textContent"], mn = { class: "flex-1 flex rounded-md" }, fn = ["textContent"], pn = { class: "shrink-0" }, vn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = ["d"], qe = /* @__PURE__ */ de({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (a, s) => (K(), q("div", an, [
      D("div", rn, [
        me(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: s[0] || (s[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
        }, [
          (K(), q("svg", sn, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
            }, null, 8, ln)
          ]))
        ], 512), [
          [pe, e.panel.calendar || e.panel.year]
        ])
      ]),
      D("div", un, [
        D("span", dn, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: s[1] || (s[1] = (t) => e.calendar.openMonth()),
            textContent: le(e.calendar.month)
          }, null, 8, cn)
        ]),
        D("span", mn, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: s[2] || (s[2] = (t) => e.calendar.openYear()),
            textContent: le(e.calendar.year)
          }, null, 8, fn)
        ])
      ]),
      D("div", pn, [
        me(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: s[3] || (s[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
        }, [
          (K(), q("svg", vn, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
            }, null, 8, hn)
          ]))
        ], 512), [
          [pe, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), Wt = Symbol("isBetweenRange"), zt = Symbol(
  "betweenRangeClasses"
), Kt = Symbol("datepickerClasses"), Gt = Symbol("atMouseOver"), Zt = Symbol("setToToday"), qt = Symbol("setToTomorrow"), Jt = Symbol("setToThisWeekend"), Xt = Symbol("setToThisWeek"), Qt = Symbol("setToThisMonth"), eo = Symbol("setToThisYear"), to = Symbol("setToCustomShortcut"), yn = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/10 order-last sm:order-0 dark:border-vtd-secondary-700 sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto"
}, bn = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, gn = ["onClick", "textContent"], xn = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, xt = /* @__PURE__ */ de({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const a = e, s = ge(Zt), t = ge(qt), l = ge(Jt), v = ge(Xt), u = ge(Qt), n = ge(eo), x = ge(to), y = ie(() => typeof a.shortcuts == "function" ? a.shortcuts() : !1);
    return (p, h) => a.asRange && a.asSingle || a.asRange && !a.asSingle ? (K(), q("div", yn, [
      y.value ? (K(), q("ol", bn, [
        (K(!0), q(xe, null, Ge(y.value, (g, P) => (K(), q("li", { key: P }, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: _e((N) => ue(x)(g, e.close), ["prevent"]),
            textContent: le(g.label)
          }, null, 8, gn)
        ]))), 128))
      ])) : (K(), q("ol", xn, [
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[0] || (h[0] = _e((g) => ue(s)(), ["prevent"]))
          }, le(a.i18n.today), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[1] || (h[1] = _e((g) => ue(t)(), ["prevent"]))
          }, le(a.i18n.tomorrow), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[2] || (h[2] = _e((g) => ue(l)(), ["prevent"]))
          }, le(a.i18n.thisWeekend), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[3] || (h[3] = _e((g) => ue(v)(), ["prevent"]))
          }, le(a.i18n.thisWeek), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[4] || (h[4] = _e((g) => ue(u)(), ["prevent"]))
          }, le(a.i18n.currentMonth), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: h[5] || (h[5] = _e((g) => ue(n)(), ["prevent"]))
          }, le(a.i18n.thisYear), 1)
        ])
      ]))
    ])) : he("", !0);
  }
}), wn = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, jn = {
  key: 0,
  class: "col-span-7 border-b relative"
}, kn = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white text-[8px] pr-2 text-vtd-secondary-400" }, $n = ["data-tooltip"], _n = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], Je = /* @__PURE__ */ de({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: a }) {
    const s = a, t = ge(Wt), l = ge(zt), v = ge(Kt), u = ge(Gt);
    return (n, x) => (K(), q("div", wn, [
      te(lo, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ne(() => [
          (K(!0), q(xe, null, Ge(e.calendar.date(), (y, p) => (K(), q(xe, { key: p }, [
            p % 7 === 0 && e.weekNumber ? (K(), q("div", jn, [
              D("span", kn, le(y.week()), 1)
            ])) : he("", !0),
            D("div", {
              class: Ve(["relative", { "vtd-tooltip": e.asRange && y.duration() }]),
              "data-tooltip": `${y.duration()}`
            }, [
              te(jt, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Ne(() => [
                  ue(t)(y) || y.hovered() ? (K(), q("span", {
                    key: 0,
                    class: Ve(["absolute bg-vtd-dark-blue/10", ue(l)(y)])
                  }, null, 2)) : he("", !0)
                ]),
                _: 2
              }, 1024),
              D("button", {
                type: "button",
                class: Ve(["vtd-datepicker-date relative w-[2.25rem] h-[2.25rem] flex justify-center items-center text-sm font-medium", [
                  ue(v)(y),
                  e.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: y.disabled || y.inRange(),
                "data-date": y.toDate(),
                onClick: (h) => s("updateDate", y),
                onMouseenter: (h) => ue(u)(y),
                onFocusin: (h) => ue(u)(y),
                textContent: le(y.date())
              }, null, 42, _n)
            ], 10, $n)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Mn = { class: "flex flex-wrap" }, Sn = { class: "flex rounded-md mt-1.5" }, Dn = ["onClick", "textContent"], Xe = /* @__PURE__ */ de({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: a }) {
    const s = a;
    return (t, l) => (K(), q("div", Mn, [
      (K(!0), q(xe, null, Ge(e.years, (v, u) => (K(), q("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Sn, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (n) => s("updateYear", v),
            textContent: le(v)
          }, null, 8, Dn)
        ])
      ]))), 128))
    ]));
  }
}), Tn = { class: "grid grid-cols-7 py-2 mt-0.5" }, On = ["textContent"], Qe = /* @__PURE__ */ de({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (a, s) => (K(), q("div", Tn, [
      (K(!0), q(xe, null, Ge(e.weeks, (t, l) => (K(), q("div", {
        key: l,
        class: "text-vtd-dark-blue text-sm lg:text-md tracking-wide font-bold text-center cursor-default"
      }, [
        D("span", {
          textContent: le(t)
        }, null, 8, On)
      ]))), 128))
    ]));
  }
}), Pn = { class: "flex flex-wrap mt-1.5" }, Vn = { class: "flex rounded-md mt-1.5" }, An = ["onClick", "textContent"], et = /* @__PURE__ */ de({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: a }) {
    const s = a;
    return (t, l) => (K(), q("div", Pn, [
      (K(!0), q(xe, null, Ge(e.months, (v, u) => (K(), q("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Vn, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (n) => s("updateMonth", u),
            textContent: le(v)
          }, null, 8, An)
        ])
      ]))), 128))
    ]));
  }
});
function Cn() {
  const e = (n) => {
    const x = [], y = n.localeData().firstDayOfWeek();
    for (let p = 0; p <= n.date(0 - y).day(); p++)
      x.push(n.date(0).subtract(p, "day"));
    return x.sort((p, h) => p.date() - h.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (n) => Array.from(
      {
        length: n.daysInMonth()
      },
      (x, y) => n.date(y + 1)
    ),
    useNextDate: (n) => {
      const x = [];
      for (let y = 1; y <= 42 - (e(n).length + n.daysInMonth()); y++)
        x.push(n.date(y).month(n.month()).add(1, "month"));
      return x;
    },
    useDisableDate: (n, { disableDate: x }) => typeof x == "function" ? x(n.toDate()) : !1,
    useBetweenRange: (n, { previous: x, next: y }) => {
      const p = x.isAfter(y, "date") ? "(]" : "[)";
      return !!(n.isBetween(x, y, "date", p) && !n.off);
    },
    useToValueFromString: (n, { formatter: x }) => n.format(x.date),
    useToValueFromArray: ({ previous: n, next: x }, {
      formatter: y,
      separator: p
    }) => `${n.format(y.date)}${p}${x.format(
      y.date
    )}`
  };
}
function Yn() {
  return {
    useVisibleViewport: (a) => {
      if (a) {
        const { right: s } = a.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return s > t;
      } else
        return null;
    }
  };
}
const En = ["disabled", "placeholder"], Fn = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Bn = ["disabled"], Ln = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Nn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Rn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, In = ["onClick"], Hn = { class: "flex flex-wrap lg:flex-nowrap" }, Un = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Wn = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, zn = { class: "px-0.5 sm:px-2" }, Kn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Gn = { class: "px-0.5 sm:px-2" }, Zn = { key: 0 }, qn = { class: "pt-4 border-t border-black/[.1]" }, Jn = { class: "mt-4 sm:flex sm:flex-row-reverse" }, Xn = ["disabled", "onClick", "textContent"], Qn = {
  key: 1,
  class: "sm:hidden"
}, ea = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, ta = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, oa = ["onClick", "textContent"], na = {
  key: 1,
  class: "flex"
}, aa = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, ra = { class: "flex flex-wrap lg:flex-nowrap" }, sa = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, la = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, ua = { class: "px-0.5 sm:px-2" }, ia = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, da = { class: "px-0.5 sm:px-2" }, ca = { key: 0 }, ma = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, fa = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, pa = ["disabled", "textContent"], va = /* @__PURE__ */ de({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " ~ " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    weekNumber: { type: Boolean, default: !1 },
    options: { default: () => ({
      shortcuts: {
        today: "Today",
        tomorrow: "Tomorrow",
        thisWeekend: "This Weekend",
        thisWeek: "This Week",
        currentMonth: "This Month",
        thisYear: "This Year"
        // pastMonth: 'Last Month',
        // yesterday: 'Yesterday',
        // past: period => `Last ${period} Days`,
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
    }) },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
  },
  emits: ["update:modelValue", "selectMonth", "selectYear", "selectRightMonth", "selectRightYear", "clickPrev", "clickNext", "clickRightPrev", "clickRightNext"],
  setup(e, { expose: a, emit: s }) {
    const t = e, l = s, {
      useCurrentDate: v,
      useDisableDate: u,
      useBetweenRange: n,
      useNextDate: x,
      usePreviousDate: y,
      useToValueFromArray: p,
      useToValueFromString: h
    } = Cn(), { useVisibleViewport: g } = Yn();
    c.extend(Wo), c.extend(Ko), c.extend(Zo), c.extend(Jo), c.extend(Qo), c.extend(tn), c.extend(nn);
    const P = J(null), N = J(null), B = J(null), V = J(""), E = J(null), M = J(""), k = J([]), T = J([]), j = J(null), O = J(null), r = wt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), o = J({
      previous: c(),
      next: c().add(1, "month"),
      year: {
        previous: c().year(),
        next: c().year()
      },
      weeks: t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort(),
      months: t.formatter.month === "MMM" ? c.monthsShort() : c.months()
    }), L = ie(() => o.value.weeks), F = ie(() => o.value.months), _ = ie(() => {
      const { previous: f, next: i, year: m } = ue(o);
      return {
        previous: {
          date: () => y(f).concat(v(f)).concat(x(f)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: f.month() === d.month(),
            off: f.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: u(d, t) && !$(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return f.month() !== d.month();
            },
            hovered: () => b() && k.value.length > 1 ? (d.isBetween(
              k.value[0],
              k.value[1],
              "date",
              "()"
            ) || d.isBetween(
              k.value[1],
              k.value[0],
              "date",
              "(]"
            )) && f.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: f && f.format(t.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, w) => m.previous + w
          ),
          onPrevious: () => {
            o.value.previous = f.subtract(1, "month"), l("clickPrev", o.value.previous);
          },
          onNext: () => {
            o.value.previous = f.add(1, "month"), f.diff(i, "month") === -1 && (o.value.next = i.add(1, "month")), l("clickNext", o.value.previous);
          },
          onPreviousYear: () => {
            o.value.year.previous = o.value.year.previous - 12;
          },
          onNextYear: () => {
            o.value.year.previous = o.value.year.previous + 12;
          },
          openMonth: () => {
            r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month;
          },
          setMonth: (d) => {
            o.value.previous = f.month(d), r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month, l("selectMonth", o.value.previous), Ue(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.next = o.value.next.year();
            });
          },
          openYear: () => {
            r.previous.year = !r.previous.year, r.previous.month = !1, r.previous.calendar = !r.previous.year;
          },
          setYear: (d) => {
            o.value.previous = f.year(d), r.previous.year = !r.previous.year, r.previous.calendar = !r.previous.year, l("selectYear", o.value.previous), Ue(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        },
        next: {
          date: () => y(i).concat(v(i)).concat(x(i)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: i.month() === d.month(),
            off: i.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: u(d, t) && !$(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return i.month() !== d.month();
            },
            hovered: () => k.value.length > 1 ? (d.isBetween(
              k.value[0],
              k.value[1],
              "date",
              "()"
            ) || d.isBetween(
              k.value[1],
              k.value[0],
              "date",
              "(]"
            )) && i.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: i && i.format(t.formatter.month),
          year: i && i.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, w) => m.next + w
          ),
          onPrevious: () => {
            o.value.next = i.subtract(1, "month"), i.diff(f, "month") === 1 && (o.value.previous = f.subtract(1, "month")), l("clickRightPrev", o.value.next);
          },
          onNext: () => {
            o.value.next = i.add(1, "month"), l("clickRightNext", o.value.next);
          },
          onPreviousYear: () => {
            o.value.year.next = o.value.year.next - 12;
          },
          onNextYear: () => {
            o.value.year.next = o.value.year.next + 12;
          },
          openMonth: () => {
            r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month;
          },
          setMonth: (d) => {
            o.value.next = i.month(d), r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month, l("selectRightMonth", o.value.next), Ue(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year();
            });
          },
          openYear: () => {
            r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year;
          },
          setYear: (d) => {
            o.value.next = i.year(d), r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year, l("selectRightYear", o.value.next), Ue(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        }
      };
    }), G = J(!1);
    setTimeout(() => {
      G.value = !0;
    }, 250);
    function Z() {
      return c().localeData().firstDayOfWeek();
    }
    function A(f) {
      const i = [...f], m = i.shift();
      return [...i, m];
    }
    function b() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function $(f) {
      if (t.disableInRange || typeof t.disableDate == "function" || M.value === "")
        return !1;
      let i, m;
      if (Array.isArray(t.modelValue)) {
        const [d, w] = t.modelValue;
        i = d, m = w;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [d, w] = Object.values(t.modelValue);
          i = d, m = w;
        }
      } else {
        const [d, w] = t.modelValue.split(t.separator);
        i = d, m = w;
      }
      return f.isBetween(
        c(i, t.formatter.date, !0),
        c(m, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function C() {
      j.value = null, O.value = null, k.value = [], E.value = null;
    }
    function S() {
      if (M.value = "", Array.isArray(t.modelValue))
        l("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const f = {}, [i, m] = Object.keys(t.modelValue);
        f[i] = "", f[m] = "", l("update:modelValue", f);
      } else
        l("update:modelValue", "");
      T.value = [], N.value && N.value.focus();
    }
    a({ clearPicker: S });
    function I() {
      if (b()) {
        const [f, i] = M.value.split(t.separator), [m, d] = [
          c(f, t.formatter.date, !0),
          c(i, t.formatter.date, !0)
        ];
        if (m.isValid() && d.isValid())
          if (R(m), R(d), Array.isArray(t.modelValue))
            l("update:modelValue", [f, i]);
          else if (typeof t.modelValue == "object") {
            const w = {}, [Y, W] = Object.keys(t.modelValue);
            w[Y] = f, w[W] = i, l("update:modelValue", w);
          } else
            l(
              "update:modelValue",
              p(
                {
                  previous: m,
                  next: d
                },
                t
              )
            );
      } else {
        const f = c(M.value, t.formatter.date, !0);
        if (f.isValid())
          if (R(f), Array.isArray(t.modelValue))
            l("update:modelValue", [M.value]);
          else if (typeof t.modelValue == "object") {
            const i = {}, [m] = Object.keys(t.modelValue);
            i[m] = M.value, l("update:modelValue", i);
          } else
            l("update:modelValue", M.value);
      }
    }
    function R(f, i) {
      if (b())
        if (j.value)
          if (O.value = f, t.autoApply) {
            f.isBefore(j.value) ? M.value = p(
              {
                previous: f,
                next: j.value
              },
              t
            ) : M.value = p(
              {
                previous: j.value,
                next: f
              },
              t
            );
            const [m, d] = M.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              l("update:modelValue", [
                c(m, t.formatter.date, !0).format(t.formatter.date),
                c(d, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const w = {}, [Y, W] = Object.keys(t.modelValue);
              w[Y] = m, w[W] = d, l("update:modelValue", w);
            } else
              l(
                "update:modelValue",
                p(
                  {
                    previous: c(m, t.formatter.date, !0),
                    next: c(d, t.formatter.date, !0)
                  },
                  t
                )
              );
            i && i(), T.value = [], c(m, t.formatter.date, !0).isSame(
              c(d, t.formatter.date, !0),
              "month"
            ) || (o.value.previous = c(m, t.formatter.date, !0), o.value.next = c(d, t.formatter.date, !0)), C();
          } else {
            j.value.isAfter(f, "month") ? T.value = [f, j.value] : T.value = [j.value, f];
            const [m, d] = T.value;
            m.isSame(d, "month") || (o.value.previous = m, o.value.next = d), C();
          }
        else
          T.value = [], j.value = f, E.value = f, k.value.push(f), T.value.push(f), o.value.previous = f, o.value.next.isSame(f, "month") && (o.value.previous = o.value.next, o.value.next = f.add(1, "month"));
      else if (t.autoApply) {
        if (M.value = h(f, t), Array.isArray(t.modelValue))
          l("update:modelValue", [M.value]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [d] = Object.keys(t.modelValue);
          m[d] = M.value, l("update:modelValue", m);
        } else
          l("update:modelValue", M.value);
        i && i(), T.value = [], C();
      } else
        T.value = [f], C();
    }
    function U(f) {
      if (T.value.length < 1)
        return !1;
      let i;
      if (b()) {
        const [m, d] = T.value;
        d.isBefore(m) ? i = p(
          {
            previous: d,
            next: m
          },
          t
        ) : i = p(
          {
            previous: m,
            next: d
          },
          t
        );
      } else {
        const [m] = T.value;
        i = m;
      }
      if (b()) {
        const [m, d] = i.split(t.separator);
        if (Array.isArray(t.modelValue))
          l("update:modelValue", [
            c(m, t.formatter.date, !0).format(t.formatter.date),
            c(d, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const w = {}, [Y, W] = Object.keys(t.modelValue);
          w[Y] = m, w[W] = d, l("update:modelValue", w);
        } else
          l(
            "update:modelValue",
            p(
              {
                previous: c(m, t.formatter.date, !0),
                next: c(d, t.formatter.date, !0)
              },
              t
            )
          );
        M.value = i;
      } else if (M.value = i.format(t.formatter.date), Array.isArray(t.modelValue))
        l("update:modelValue", [M.value]);
      else if (typeof t.modelValue == "object") {
        const m = {}, [d] = Object.keys(t.modelValue);
        m[d] = M.value, l("update:modelValue", m);
      } else
        l("update:modelValue", M.value);
      f && f();
    }
    function X(f) {
      if (!b())
        return !1;
      if (j.value)
        k.value = [j.value, f];
      else
        return k.value = [], !1;
    }
    function ee(f) {
      if (j.value && t.autoApply)
        return !1;
      let i, m;
      if (k.value.length > 1) {
        const [d, w] = k.value;
        i = c(d, t.formatter.date, !0), m = c(w, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [d, w] = t.modelValue;
          i = d && c(d, t.formatter.date, !0), m = w && c(w, t.formatter.date, !0);
        } else {
          const [d, w] = T.value;
          i = c(d, t.formatter.date, !0), m = c(w, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [d, w] = Object.values(t.modelValue);
            i = d && c(d, t.formatter.date, !0), m = w && c(w, t.formatter.date, !0);
          }
        } else {
          const [d, w] = T.value;
          i = c(d, t.formatter.date, !0), m = c(w, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [d, w] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        i = d && c(d, t.formatter.date, !0), m = w && c(w, t.formatter.date, !0);
      } else {
        const [d, w] = T.value;
        i = c(d, t.formatter.date, !0), m = c(w, t.formatter.date, !0);
      }
      return i && m ? n(f, {
        previous: i,
        next: m
      }) : !1;
    }
    function oe(f) {
      const { today: i, active: m, off: d, disabled: w } = f;
      let Y, W, ae;
      if (b())
        if (Array.isArray(t.modelValue))
          if (E.value) {
            const [z, Q] = k.value;
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, Q] = t.modelValue;
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          } else {
            const [z, Q] = T.value;
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (E.value) {
            const [z, Q] = k.value;
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, Q] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          } else {
            const [z, Q] = T.value;
            W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
          }
        else if (E.value) {
          const [z, Q] = k.value;
          W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [z, Q] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
        } else {
          const [z, Q] = T.value;
          W = z && c(z, t.formatter.date, !0), ae = Q && c(Q, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [z] = t.modelValue;
            W = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = T.value;
          W = z && c(z, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [z] = Object.values(t.modelValue);
            W = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = T.value;
          W = z && c(z, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [z] = t.modelValue.split(t.separator);
          W = c(z, t.formatter.date, !0);
        }
      } else {
        const [z] = T.value;
        W = z && c(z, t.formatter.date, !0);
      }
      return m && (Y = i ? "text-vtd-dark-blue bg-vtd-medium-gray rounded-md" : w ? "text-vtd-light-gray font-normal disabled:text-vtd-light-gray disabled:cursor-not-allowed" : (W && ae && f.isBetween(W, ae, "date", "()"), "text-vtd-dark-blue")), d && (Y = "text-vtd-dark-blue disabled:cursor-not-allowed"), W && ae && !d ? (f.isSame(W, "date") && (Y = ae.isAfter(W, "date") ? "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed", W.isSame(ae, "date") && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed")), f.isSame(ae, "date") && (Y = ae.isAfter(W, "date") ? "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed", W.isSame(ae, "date") && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"))) : W && f.isSame(W, "date") && !d && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"), Y;
    }
    function ce(f) {
      let i, m, d;
      if (i = "", !b())
        return i;
      if (Array.isArray(t.modelValue))
        if (k.value.length > 1) {
          const [w, Y] = k.value;
          m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [w, Y] = t.modelValue;
          m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
        } else {
          const [w, Y] = T.value;
          m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (k.value.length > 1) {
          const [w, Y] = k.value;
          m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [w, Y] = Object.values(t.modelValue);
            m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
          }
        } else {
          const [w, Y] = T.value;
          m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
        }
      else if (k.value.length > 1) {
        const [w, Y] = k.value;
        m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [w, Y] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
      } else {
        const [w, Y] = T.value;
        m = w && c(w, t.formatter.date, !0), d = Y && c(Y, t.formatter.date, !0);
      }
      return m && d && (f.isSame(m, "date") ? (d.isBefore(m) && (i += " rounded-r-md inset-0"), m.isBefore(d) && (i += " rounded-l-md inset-0")) : f.isSame(d, "date") ? (d.isBefore(m) && (i += " rounded-l-md inset-0"), m.isBefore(d) && (i += " rounded-r-md inset-0")) : i += " inset-0"), i;
    }
    function we(f, i) {
      o.value.previous = c(f, t.formatter.date, !0), o.value.next = c(i, t.formatter.date, !0), (c.duration(o.value.next.diff(o.value.previous)).get("months") === 2 || c.duration(o.value.next.diff(o.value.previous)).get("months") === 1 && c.duration(o.value.next.diff(o.value.previous)).get("days") === 7) && (o.value.next = o.value.next.subtract(1, "month")), (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month"));
    }
    function se(f, i) {
      if (b())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            l("update:modelValue", [f, i]);
          else if (typeof t.modelValue == "object") {
            const m = {}, [d, w] = Object.keys(t.modelValue);
            m[d] = f, m[w] = i, l("update:modelValue", m);
          } else
            l(
              "update:modelValue",
              p(
                {
                  previous: c(f, t.formatter.date, !0),
                  next: c(i, t.formatter.date, !0)
                },
                t
              )
            );
          M.value = `${f}${t.separator}${i}`;
        } else
          T.value = [
            c(f, t.formatter.date, !0),
            c(i, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          l("update:modelValue", [f]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [d] = Object.keys(t.modelValue);
          m[d] = f, l("update:modelValue", m);
        } else
          l("update:modelValue", f);
        M.value = f;
      } else
        T.value = [
          c(f, t.formatter.date, !0),
          c(i, t.formatter.date, !0)
        ];
      we(f, i);
    }
    function je(f) {
      const i = c().format(t.formatter.date), m = c().format(t.formatter.date);
      se(i, m), f && f();
    }
    function ye(f) {
      const i = c(), d = (6 - i.day() + 7) % 7, w = i.add(d, "day"), Y = w.add(1, "day"), W = w.format(t.formatter.date), ae = Y.format(t.formatter.date);
      se(W, ae), f && f();
    }
    function ne(f) {
      const i = c(), m = i.day(), d = i.subtract(m, "day"), w = d.add(6, "day"), Y = d.format(t.formatter.date), W = w.format(t.formatter.date);
      se(Y, W), f && f();
    }
    function fe(f) {
      const i = c().add(1, "day").format(t.formatter.date), m = c().add(1, "day").format(t.formatter.date);
      se(i, m), f && f();
    }
    function be(f) {
      const i = c().date(1).format(t.formatter.date), m = c().date(c().daysInMonth()).format(t.formatter.date);
      se(i, m), f && f();
    }
    function ke(f) {
      const i = c(), m = i.startOf("year"), d = i.endOf("year"), w = m.format(t.formatter.date), Y = d.format(t.formatter.date);
      se(w, Y), f && f();
    }
    function Be(f, i) {
      const [m, d] = f.atClick(), w = c(m).format(t.formatter.date), Y = c(d).format(t.formatter.date);
      se(w, Y), i && i();
    }
    ut(
      () => T.value,
      (f) => {
        f.length > 0 && (r.previous.calendar = !0, r.previous.month = !1, r.previous.year = !1, r.next.calendar = !0, r.next.month = !1, r.next.year = !1);
      }
    ), $e(() => {
      t.placeholder ? V.value = t.placeholder : b() ? V.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : V.value = t.formatter.date;
    }), c.locale(t.i18n), ut(() => t.i18n, () => c.locale(t.i18n)), $e(() => {
      const f = t.i18n, i = t.modelValue;
      Ue(async () => {
        if (f in gt) {
          const Y = await gt[f]();
          c.locale(Y, void 0, !0), c.locale(f);
        }
        let m, d;
        if (b()) {
          if (Array.isArray(i)) {
            if (i.length > 0) {
              const [Y, W] = i;
              m = c(Y, t.formatter.date, !0), d = c(W, t.formatter.date, !0);
            }
          } else if (typeof i == "object") {
            if (!uo(i))
              try {
                Object.keys(i);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), l("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (i) {
              const [Y, W] = Object.values(i);
              m = Y && c(Y, t.formatter.date, !0), d = W && c(W, t.formatter.date, !0);
            }
          } else if (i) {
            const [Y, W] = i.split(t.separator);
            m = c(Y, t.formatter.date, !0), d = c(W, t.formatter.date, !0);
          }
          m && d ? (M.value = p(
            {
              previous: m,
              next: d
            },
            t
          ), d.isBefore(m, "month") ? (o.value.previous = d, o.value.next = m, o.value.year.previous = d.year(), o.value.year.next = m.year()) : d.isSame(m, "month") ? (o.value.previous = m, o.value.next = d.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year()) : (o.value.previous = m, o.value.next = d, o.value.year.previous = m.year(), o.value.year.next = d.year()), t.autoApply || (T.value = [m, d])) : (o.value.previous = c(t.startFrom), o.value.next = c(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        } else {
          if (Array.isArray(i)) {
            if (i.length > 0) {
              const [Y] = i;
              m = c(Y, t.formatter.date, !0);
            }
          } else if (typeof i == "object") {
            if (i) {
              const [Y] = Object.values(i);
              m = c(Y, t.formatter.date, !0);
            }
          } else if (i.length) {
            const [Y] = i.split(t.separator);
            m = c(Y, t.formatter.date, !0);
          }
          m && m.isValid() ? (M.value = h(m, t), o.value.previous = m, o.value.next = m.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year(), t.autoApply || (T.value = [m])) : (o.value.previous = c(t.startFrom), o.value.next = c(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        }
        const w = t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort();
        o.value.weeks = Z() ? A(w) : w, o.value.months = t.formatter.month === "MMM" ? c.monthsShort() : c.months();
      });
    });
    function Le(f) {
      return f && B.value === null && (B.value = g(P.value)), f && B.value ? "place-right" : "place-left";
    }
    function He(f) {
      return f && B.value === null && (B.value = g(P.value)), B.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return re(Wt, ee), re(zt, ce), re(Kt, oe), re(Gt, X), re(Zt, je), re(Jt, ye), re(Xt, ne), re(qt, fe), re(Qt, be), re(eo, ke), re(to, Be), (f, i) => t.noInput ? G.value ? (K(), q("div", na, [
      D("div", aa, [
        D("div", ra, [
          t.shortcuts ? (K(), We(xt, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": b(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : he("", !0),
          D("div", sa, [
            b() && !t.asSingle ? (K(), q("div", la, [...i[10] || (i[10] = [
              D("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1)
            ])])) : he("", !0),
            D("div", {
              class: Ve(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": b() && !t.asSingle
              }])
            }, [
              te(qe, {
                panel: r.previous,
                calendar: _.value.previous
              }, null, 8, ["panel", "calendar"]),
              D("div", ua, [
                me(te(et, {
                  months: F.value,
                  onUpdateMonth: _.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, r.previous.month]
                ]),
                me(te(Xe, {
                  years: _.value.previous.years(),
                  onUpdateYear: _.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, r.previous.year]
                ]),
                me(D("div", null, [
                  te(Qe, { weeks: L.value }, null, 8, ["weeks"]),
                  te(Je, {
                    calendar: _.value.previous,
                    weeks: L.value,
                    "as-range": b(),
                    "week-number": e.weekNumber,
                    onUpdateDate: i[4] || (i[4] = (m) => R(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, r.previous.calendar]
                ])
              ])
            ], 2),
            b() && !t.asSingle ? (K(), q("div", ia, [
              te(qe, {
                "as-prev-or-next": "",
                panel: r.next,
                calendar: _.value.next
              }, null, 8, ["panel", "calendar"]),
              D("div", da, [
                me(te(et, {
                  months: F.value,
                  onUpdateMonth: _.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, r.next.month]
                ]),
                me(te(Xe, {
                  "as-prev-or-next": "",
                  years: _.value.next.years(),
                  onUpdateYear: _.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, r.next.year]
                ]),
                me(D("div", null, [
                  te(Qe, { weeks: L.value }, null, 8, ["weeks"]),
                  te(Je, {
                    "as-prev-or-next": "",
                    calendar: _.value.next,
                    weeks: L.value,
                    "as-range": b(),
                    "week-number": e.weekNumber,
                    onUpdateDate: i[5] || (i[5] = (m) => R(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, r.next.calendar]
                ])
              ])
            ])) : he("", !0)
          ])
        ]),
        t.autoApply ? he("", !0) : (K(), q("div", ca, [
          D("div", ma, [
            D("div", fa, [
              D("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: t.asSingle ? T.value.length < 1 : T.value.length < 2,
                onClick: i[6] || (i[6] = (m) => U()),
                textContent: le(t.options.footer.apply)
              }, null, 8, pa)
            ])
          ])
        ]))
      ])
    ])) : he("", !0) : (K(), We(ue(Et), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Ne(({ open: m }) => [
        t.overlay && !t.disabled ? (K(), We(ue(Ro), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : he("", !0),
        te(ue(No), {
          as: "label",
          class: "relative block"
        }, {
          default: Ne(() => [
            pt(f.$slots, "default", {
              value: M.value,
              placeholder: V.value,
              clear: S
            }, () => [
              me(D("input", io({
                ref_key: "VtdInputRef",
                ref: N
              }, f.$attrs, {
                "onUpdate:modelValue": i[0] || (i[0] = (d) => M.value = d),
                type: "text",
                class: ["relative block w-full", [
                  t.disabled ? "cursor-default opacity-50" : "opacity-100",
                  e.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: V.value,
                onKeyup: _e(I, ["stop"]),
                onKeydown: i[1] || (i[1] = _e(() => {
                }, ["stop"]))
              }), null, 16, En), [
                [co, M.value]
              ]),
              D("div", Fn, [
                D("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Ve([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: i[2] || (i[2] = (d) => {
                    var w;
                    return t.disabled ? !1 : M.value ? S() : (w = N.value) == null ? void 0 : w.focus();
                  })
                }, [
                  pt(f.$slots, "inputIcon", { value: M.value }, () => [
                    (K(), q("svg", Ln, [
                      M.value ? (K(), q("path", Nn)) : (K(), q("path", Rn))
                    ]))
                  ])
                ], 10, Bn)
              ])
            ])
          ]),
          _: 3
        }),
        te(jt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Ne(() => [
            t.disabled ? he("", !0) : (K(), We(ue(Io), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Ne(({ close: d }) => [
                D("div", {
                  class: Ve(["absolute z-50 top-full sm:mt-2.5", He(m)])
                }, [
                  D("div", {
                    ref_key: "VtdRef",
                    ref: P,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    D("div", {
                      class: Ve(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 lg:p-6 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Le(m)])
                    }, [
                      D("div", {
                        onClick: (w) => d(),
                        class: "text-vtd-orange absolute cursor-pointer top-3 right-3"
                      }, [...i[7] || (i[7] = [
                        D("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          D("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M6 6l12 12M18 6l-12 12"
                          })
                        ], -1)
                      ])], 8, In),
                      D("div", Hn, [
                        t.shortcuts ? (K(), We(xt, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": b(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: d
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : he("", !0),
                        D("div", Un, [
                          b() && !t.asSingle ? (K(), q("div", Wn, [...i[8] || (i[8] = [
                            D("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1)
                          ])])) : he("", !0),
                          D("div", {
                            class: Ve(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": b() && !t.asSingle,
                              "w-full": !b() && t.asSingle
                            }])
                          }, [
                            te(qe, {
                              panel: r.previous,
                              calendar: _.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            D("div", zn, [
                              me(te(et, {
                                months: F.value,
                                onUpdateMonth: _.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, r.previous.month]
                              ]),
                              me(te(Xe, {
                                years: _.value.previous.years(),
                                onUpdateYear: _.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, r.previous.year]
                              ]),
                              me(D("div", null, [
                                te(Qe, { weeks: L.value }, null, 8, ["weeks"]),
                                te(Je, {
                                  calendar: _.value.previous,
                                  weeks: L.value,
                                  "as-range": b(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (w) => R(w, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, r.previous.calendar]
                              ])
                            ])
                          ], 2),
                          b() && !t.asSingle ? (K(), q("div", Kn, [
                            te(qe, {
                              "as-prev-or-next": "",
                              panel: r.next,
                              calendar: _.value.next
                            }, null, 8, ["panel", "calendar"]),
                            D("div", Gn, [
                              me(te(et, {
                                months: F.value,
                                onUpdateMonth: _.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, r.next.month]
                              ]),
                              me(te(Xe, {
                                "as-prev-or-next": "",
                                years: _.value.next.years(),
                                onUpdateYear: _.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, r.next.year]
                              ]),
                              me(D("div", null, [
                                te(Qe, { weeks: L.value }, null, 8, ["weeks"]),
                                te(Je, {
                                  "as-prev-or-next": "",
                                  calendar: _.value.next,
                                  weeks: L.value,
                                  "as-range": b(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (w) => R(w, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, r.next.calendar]
                              ])
                            ])
                          ])) : he("", !0)
                        ])
                      ]),
                      t.autoApply ? (K(), q("div", Qn, [
                        D("div", ea, [
                          D("div", ta, [
                            D("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (w) => d(),
                              textContent: le(t.options.footer.cancel)
                            }, null, 8, oa)
                          ])
                        ])
                      ])) : (K(), q("div", Zn, [
                        D("div", qn, [
                          i[9] || (i[9] = D("div", { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-end gap-4" }, [
                            D("label", {
                              for: "check-morning",
                              class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
                            }, [
                              D("input", {
                                type: "checkbox",
                                name: "morning",
                                id: "check-morning"
                              }),
                              D("span", null, "Show Morning")
                            ]),
                            D("label", {
                              for: "check-afternoon",
                              class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
                            }, [
                              D("input", {
                                type: "checkbox",
                                name: "afternoon",
                                id: "check-afternoon"
                              }),
                              D("span", null, "Show Afternoon")
                            ]),
                            D("label", {
                              for: "check-evening",
                              class: "item frank text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
                            }, [
                              D("input", {
                                type: "checkbox",
                                name: "evening",
                                id: "check-evening"
                              }),
                              D("span", null, "Show Evening")
                            ]),
                            D("label", {
                              for: "check-night",
                              class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
                            }, [
                              D("input", {
                                type: "checkbox",
                                name: "night",
                                id: "check-night"
                              }),
                              D("span", null, "Show Night")
                            ])
                          ], -1)),
                          D("div", Jn, [
                            D("button", {
                              type: "button",
                              class: "away-apply-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-not-allowed",
                              disabled: t.asSingle ? T.value.length < 1 : T.value.length < 2,
                              onClick: (w) => U(d),
                              textContent: le(t.options.footer.apply)
                            }, null, 8, Xn),
                            D("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: i[3] || (i[3] = (w) => je()),
                              textContent: "Reset"
                            })
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
});
const oo = /* @__PURE__ */ (() => {
  const e = va;
  return e.install = (a) => {
    a.component("VueTailwindDatepicker", e);
  }, e;
})(), ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ha).forEach(([e, a]) => {
  e !== "default" && (oo[e] = a);
});
export {
  oo as default
};
