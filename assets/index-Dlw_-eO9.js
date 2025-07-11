(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=({title:e,buttonType:t,cartItemCount:n=0})=>{let r=()=>t===`back`?`
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      `:t===`home`?`
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
      `:``,i=()=>t===`home`?``:`<h1 class="text-lg font-bold text-gray-900">${e}</h1>`,a=()=>n>0?`
        <span
          class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        >
          ${n}
        </span>
      `:``;return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">${r()} ${i()}</div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              ${a()}
            </button>
          </div>
        </div>
      </div>
    </header>
  `};var a=i;const o=()=>`<footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>`;var s=o;const c=e=>`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${e.productId}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${e.image}"
          alt="${e.title}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">${parseInt(e.lprice).toLocaleString()}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                          hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${e.productId}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `;var l=c;const u=()=>`
    <div class="relative">
      <input
        type="text"
        id="search-input"
        placeholder="상품명을 검색해보세요..."
        value=""
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  `,d=()=>`<select
    id="limit-select"
    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="10">10개</option>
    <option value="20" selected="">20개</option>
    <option value="50">50개</option>
    <option value="100">100개</option>
  </select> `,f=()=>`<select
    id="sort-select"
    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="price_asc" selected="">가격 낮은순</option>
    <option value="price_desc">가격 높은순</option>
    <option value="name_asc">이름순</option>
    <option value="name_desc">이름 역순</option>
  </select>`,p=e=>`
    <div class="inline-flex items-center">
      <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span class="text-sm text-gray-600">${e}</span>
    </div>
  `,m=()=>` <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3">
      <div class="h-4 bg-gray-200 rounded mb-2"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>`,h=m().repeat(4),g=({categories:e,products:t,total:n,loading:r,isFetchingMore:i,hasMore:o,selectedCategory1:c,selectedCategory2:m,cartItemCount:g})=>{let _=Object.keys(e),v=`
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;c&&(v+=`
      <span class="text-xs text-gray-500">&gt;</span>
      <button data-breadcrumb="category1" data-category1="${c}" class="text-xs hover:text-blue-800 hover:underline">
        ${c}
      </button>
    `,m&&(v+=`
        <span class="text-xs text-gray-500">&gt;</span>
        <span class="text-xs text-gray-600 cursor-default">${m}</span>
      `));let y=``;c||(y=`
      <div class="flex flex-wrap gap-2">
        ${_.map(e=>`
          <button data-category1="${e}" data-breadcrumb="category1" class="text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
            ${e}
          </button>
        `).join(``)}
      </div>
    `);let b=``;return c&&e[c]&&e[c].length>0&&(b=`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2">
          ${e[c].map(e=>{let t=e===m,n=t?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
              <button data-category1="${c}" data-category2="${e}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${n}">
                ${e}
              </button>
            `}).join(``)}
        </div>
      </div>
    `),`
    <div class="min-h-screen bg-gray-50">
      ${a({title:`쇼핑몰`,buttonType:`home`,cartItemCount:g})}
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">${u()}</div>
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <!-- 1depth 카테고리 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">카테고리:</label>
                ${v}
              </div>
              <!-- 1depth 카테고리 -->
              ${r?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:y}
              <!-- 2depth 카테고리  -->
              ${b}
            </div>
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                ${d()}
              </div>
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                ${f()}
              </div>
            </div>
          </div>
        </div>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 개수 정보 -->
            ${r?``:`
              <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n}개</span>의 상품
              </div>
              `}
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              <!-- 로딩 스켈레톤 -->
              ${r?h:`
                ${t.map(l).join(``)}
                `}
            </div>

            <!-- 무한 스크롤 로딩 인디케이터 -->
            <div class="text-center py-4">
              ${i?p(`상품을 불러오는 중...`):``}
              ${!o&&!r?`<p class="text-gray-500">더 이상 상품이 없습니다.</p>`:``}
            </div>
          </div>
        </div>
      </main>
      ${s()}
    </div>
  `};async function _(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function v(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function y(){let e=await fetch(`/api/categories`);return await e.json()}const b=e=>e?`
    <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
      <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
      <p class="text-sm font-bold text-blue-600">${e.lprice.toLocaleString()}원</p>
    </div>
  `:``;var x=b;const S=e=>{let t=e,n=new Set,r=()=>t,i=e=>{t={...t,...e.payload},n.forEach(e=>e(t))},a=e=>(n.add(e),()=>n.delete(e));return{getState:r,dispatch:i,subscribe:a}},C=()=>{try{let e=localStorage.getItem(`currentLimit`),t=e?parseInt(e,10):20,n=localStorage.getItem(`currentSort`),r=n||`price_asc`,i=localStorage.getItem(`cart`),a=i?JSON.parse(i):[],o=a.length;return{categories:{},products:[],total:0,loading:!1,isFetchingMore:!1,hasMore:!0,selectedCategory1:null,selectedCategory2:null,cartItemCount:o,currentLimit:t,currentSort:r,currentPage:1,currentDetailProduct:{}}}catch(e){return console.log(`로컬 스토리지 오류 : `,e),{categories:{},products:[],total:0,loading:!1,isFetchingMore:!1,hasMore:!0,selectedCategory1:null,selectedCategory2:null,cartItemCount:0,currentLimit:20,currentSort:`price_asc`,currentPage:1,currentDetailProduct:{}}}},w=C(),T=S(w),E=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    </main>
  `,D=()=>`
    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      ></path>
    </svg>
  `,O=async e=>{let{cartItemCount:t}=T.getState(),n=null,r=!0;try{n=await v(e),T.dispatch({type:`SET_CURRENT_DETAIL_PRODUCT`,payload:{currentDetailProduct:n}})}catch(e){console.error(e)}finally{r=!1}let i=[];try{if(n=await v(e),T.dispatch({type:`SET_CURRENT_DETAIL_PRODUCT`,payload:{currentDetailProduct:n}}),n){let e=await _({category1:n.category1,category2:n.category2,limit:3});i=e.products.filter(e=>e.productId!==n.productId).slice(0,2)}}catch(e){console.error(`상품 또는 관련 상품 정보를 불러오는 중 오류 발생:`,e),T.dispatch({type:`SET_CURRENT_DETAIL_PRODUCT`,payload:{currentDetailProduct:null}})}finally{r=!1}return r?`
    ${a()}
    ${E()}
    ${s()}
    `:`
    <div class="min-h-screen bg-gray-50">
    ${a({title:`상품 상세`,buttonType:`back`,cartItemCount:t})}
    <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1=${n.category1}>
              ${n.category1}
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2=${n.category2}>
            ${n.category2}
            </button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src=${n.image} alt='${n.title}' class="w-full h-full object-cover product-detail-image">
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${n.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  ${D().repeat(n.rating)}
                </div>
                <span class="ml-2 text-sm text-gray-600">${n.rating} (${n.reviewCount}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${n.lprice}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${n.stock}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${n.description}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                    rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>

                <input type="number" id="quantity-input" value="1" min="1" max="${n.stock>0?n.stock:1}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                  rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${n.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
            ${i.map(e=>x(e)).join(``)}
            </div>
          </div>
        </div>
      </main>
    ${s()}
    </div>`},k=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>
  `,A=`/front_6th_chapter1-1`,j=()=>r(async()=>{let{worker:e}=await import(`./browser-CsBWiKON.js`);return{worker:e}},[]).then(({worker:e})=>e.start({serviceWorker:{url:`${A}/mockServiceWorker.js`,scope:`${A}/`},onUnhandledRequest:`bypass`}));let M=!1,N=``;const P=()=>{let e=document.getElementById(`total-product-count`);e&&(e.textContent=T.getState().total.toLocaleString())},F=(e=!1)=>{let t=document.getElementById(`products-grid`);if(!t)return;let n=T.getState().products;e||(t.innerHTML=``),t.innerHTML=n.map(e=>l(e)).join(``)},I=()=>{let e=window.location.pathname;e===`/`&&(P(),F(!1))},L=async(e=!1)=>{let t=T.getState();if(e){if(!t.hasMore||t.isFetchingMore)return;T.dispatch({type:`SET_FETCHING_MORE`,payload:{isFetchingMore:!0}}),T.dispatch({type:`INCREMENT_PAGE`,payload:{currentPage:t.currentPage+1}})}else T.dispatch({type:`SET_LOADING`,payload:{loading:!0}}),T.dispatch({type:`RESET_PAGE`,payload:{currentPage:1}}),T.dispatch({type:`RESET_PRODUCTS`,payload:{products:[]}}),T.dispatch({type:`SET_HAS_MORE`,payload:{hasMore:!0}});try{let{currentLimit:t,currentSort:n,currentPage:r,selectedCategory1:i,selectedCategory2:a}=T.getState(),[{products:o,pagination:s},c]=await Promise.all([_({limit:t,sort:n,search:N,page:r,category1:i,category2:a}),y()]);T.dispatch({type:`SET_CATEGORIES`,payload:{categories:c}}),e?T.dispatch({type:`ADD_PRODUCTS`,payload:{products:[...T.getState().products,...o]}}):T.dispatch({type:`SET_PRODUCTS`,payload:{products:o}}),T.dispatch({type:`SET_TOTAL`,payload:{total:s.total}}),T.dispatch({type:`SET_HAS_MORE`,payload:{hasMore:T.getState().products.length<T.getState().total}})}catch(e){console.error(`상품 불러오기 오류:`,e),T.dispatch({type:`SET_LOADING`,payload:{loading:!1}}),T.dispatch({type:`SET_FETCHING_MORE`,payload:{isFetchingMore:!1}})}finally{T.dispatch({type:`SET_LOADING`,payload:{loading:!1}}),T.dispatch({type:`SET_FETCHING_MORE`,payload:{isFetchingMore:!1}}),J()}},R=()=>{if(window.location.pathname!==`/`||M)return;let e=document.documentElement.scrollHeight,t=window.scrollY,n=window.innerHeight,r=t+n>=e-100;r&&!T.getState().isFetchingMore&&T.getState().hasMore&&!T.getState().loading&&(L(!0),M=!0,setTimeout(()=>{M=!1},500))},z=e=>{let t=e.target.closest(`[data-breadcrumb], .category2-filter-btn`);if(!t)return;let n=T.getState().selectedCategory1,r=T.getState().selectedCategory2;if(t.dataset.breadcrumb===`reset`)n=null,r=null;else if(t.dataset.breadcrumb===`category1`)n=t.dataset.category1,r=null;else if(t.classList.contains(`category2-filter-btn`))n=t.dataset.category1,r=t.dataset.category2;else return;T.dispatch({type:`SET_CATEGORIES_FILTER`,payload:{selectedCategory1:n,selectedCategory2:r}}),L(!1)},B=()=>{let e=document.getElementById(`quantity-input`),t=document.getElementById(`quantity-decrease`),n=document.getElementById(`quantity-increase`);if(e&&t&&n){let r=parseInt(e.max,10);t.addEventListener(`click`,()=>{let t=parseInt(e.value,10);t>1&&(e.value=t-1)}),n.addEventListener(`click`,()=>{let t=parseInt(e.value,10);t<r&&(e.value=t+1)}),e.addEventListener(`change`,()=>{let t=parseInt(e.value,10);isNaN(t)||t<1?e.value=1:t>r&&(e.value=r)})}},V=()=>{document.body.removeEventListener(`click`,W),document.body.addEventListener(`click`,W),document.body.removeEventListener(`click`,G),document.body.addEventListener(`click`,G),document.body.removeEventListener(`click`,U),document.body.addEventListener(`click`,U),document.body.removeEventListener(`click`,H),document.body.addEventListener(`click`,H);let e=document.querySelector(`.space-y-3 > .space-y-2`);e&&(e.removeEventListener(`click`,z),e.addEventListener(`click`,z));let t=document.getElementById(`limit-select`);t&&(t.value=T.getState().currentLimit.toString(),t.onchange=e=>{let t=parseInt(e.target.value);T.dispatch({type:`SET_LIMIT`,payload:{currentLimit:t}}),localStorage.setItem(`currentLimit`,t.toString()),L()});let n=document.getElementById(`sort-select`);n&&(n.value=T.getState().currentSort,n.onchange=e=>{let t=e.target.value;T.dispatch({type:`SET_SORT`,payload:{currentSort:t}}),localStorage.setItem(`currentSort`,t),L()});let r=document.getElementById(`search-input`);r&&(r.value=N,r.oninput=e=>{N=e.target.value},r.onkeydown=e=>{e.key===`Enter`&&L()}),window.removeEventListener(`scroll`,R),window.addEventListener(`scroll`,R)},H=e=>{let t=e.target.closest(`.product-card, .related-product-card`);if(t){let e=t.dataset.productId;e&&Y(`/product/${e}`)}},U=e=>{let t=e.target.closest(`a`);t&&t.matches(`[data-link]`)&&t.hostname===window.location.hostname&&(e.preventDefault(),Y(t.href))},W=e=>{let t=e.target.closest(`.add-to-cart-btn`);if(!t)return;let n=t.dataset.productId;if(!n)return;let r=1,i=T.getState().products.find(e=>e.productId===n),a=JSON.parse(localStorage.getItem(`cart`)||`[]`),o=a.findIndex(e=>e.productId===n);o>-1?(a[o].quantity+=r,window.alert(`${i.title} 상품의 수량이 ${a[o].quantity}개로 변경되었습니다~!`)):(a.push({...i,quantity:r}),window.alert(`${i.title} 상품이 장바구니에 추가되었습니다!`)),localStorage.setItem(`cart`,JSON.stringify(a)),T.dispatch({type:`UPDATE_CART_COUNT`,payload:{cartItemCount:a.length}})},G=async e=>{let t=e.target.closest(`#add-to-cart-btn`);if(!t)return;let n=t.dataset.productId;if(!n){console.warn(`장바구니에 추가할 상품의 ID를 찾을 수 없습니다.`);return}let r=document.getElementById(`quantity-input`),i=1;r&&(i=parseInt(r.value,10),(isNaN(i)||i<1)&&(i=1));let a=T.getState().currentDetailProduct,o=JSON.parse(localStorage.getItem(`cart`)||`[]`),s=o.findIndex(e=>e.productId===n);s>-1?(o[s].quantity+=i,window.alert(`${a.title} 상품의 수량이 ${o[s].quantity}개로 변경되었습니다~!`)):(o.push({...a,quantity:i}),window.alert(`${a.title} 상품이 장바구니에 추가되었습니다!`)),localStorage.setItem(`cart`,JSON.stringify(o)),T.dispatch({type:`UPDATE_CART_COUNT`,payload:{cartItemCount:o.length}})},K=/^\/$/,q=[{path:K,view:()=>g(T.getState())},{path:/^\/product\/([\w-]+)$/,view:e=>O(e)}],J=async()=>{let e=window.location.pathname,t=document.body.querySelector(`#root`);e.startsWith(A)&&(e=e.substring(21)),(e===``||e===`/`)&&(e=`/`);let n=q.map(t=>{let n=e.match(t.path);return n?{route:t,result:n}:null}).find(e=>e!==null);if(!n){t.innerHTML=k();return}let r=n.result.slice(1),i;i=e===`/`?await n.route.view(T.getState()):await n.route.view(...r),t&&(t.innerHTML=i),I(),V(),e.startsWith(`/product/`)&&B()},Y=e=>{let t=A+e;window.location.pathname!==t&&(window.history.pushState(null,null,t),J())};function X(){let e=window.location.pathname;e.startsWith(A)&&(e=e.substring(21)),(e===``||e===`/`)&&(e=`/`),window.addEventListener(`popstate`,()=>{J()}),T.subscribe(()=>{(window.location.pathname===A||window.location.pathname===A+`/`)&&J()}),J(),e===`/`&&L()}j().then(X);