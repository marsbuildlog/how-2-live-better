import{l as $,m as q,t as L,s as h,a as M}from"./marks-core.eLEXBvcy.js";import{l as p,r as _}from"./srs-storage.CIu3V8OW.js";import{d,i as w}from"./srs-core.k71dYATi.js";const s=t=>String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),y=(t,e)=>{typeof gtag=="function"&&gtag("event",t,{mark_id:String(e).slice(0,14)})};function f(t){const e=document.createElement("div");e.className="toast",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>e.remove(),2200)}function H(t){return t==="A"?"pill-green":t==="B"?"pill-amber":"pill-red"}function v(t,e=d()){return t?t.box>=1?w(t,e)?"recall":"cooling":t.lapses>0?w(t,e)?"recall":"pending":"understand":"understand"}function T(t){return`<span class="pill ${H(t.evidence)}">${s(t.evidence)} 级证据</span>`}function N(t){return t==="todo"?'<span class="rv-mark-tag todo">清单中</span>':t==="dismiss"?'<span class="rv-mark-tag dismiss">暂不适合</span>':t==="done"?'<span class="rv-mark-tag done">已做到</span>':""}function A(t){return`
    ${t.why?`<p class="why"><span class="rv-why-label">为什么现在</span>${s(t.why)}</p>`:""}
    <p class="slip-plain">${s(t.plain)}</p>
    <p class="rv-detail-link"><a href="/q/${s(t.slug)}/">查看出处 →</a></p>`}function B(t,e){return t==="pending"||t==="cooling"&&(e?.box??0)===1}function z(t,{voluntaryRecall:e=!1}={}){return t==="understand"?"understand":t==="recall"||e&&(t==="cooling"||t==="pending")?"recall":null}function D(t){return t==="understand"?`<div class="rv-rate" role="group" aria-label="认知理解">
      <button type="button" class="btn" data-rate="forgot">未理解</button>
      <button type="button" class="btn primary" data-rate="remembered">理解了</button>
    </div>`:t==="recall"?`<div class="rv-rate" role="group" aria-label="记忆温习">
      <button type="button" class="btn" data-rate="forgot">不完全记得</button>
      <button type="button" class="btn primary" data-rate="remembered">记得</button>
    </div>`:""}function K(t,e,{voluntaryRecall:n=!1}={}){return e?n&&(t==="cooling"||t==="pending")?`<p class="rv-meta">主动温习 · 原定下次 ${s(e.due)}</p>`:t==="cooling"?(e.box??0)>=2?`<p class="rv-meta">已记得 · 下次温习 ${s(e.due)} · 连续记得 ${e.box} 次</p>`:`<p class="rv-meta">已理解 · 下次温习 ${s(e.due)}</p>`:t==="pending"?`<p class="rv-meta">未完全记得 · 下次温习 ${s(e.due)}</p>`:t==="recall"&&e.due?`<p class="rv-meta">到期温习 · 原定 ${s(e.due)}</p>`:"":""}function j(t,e){return e?t==="done"?'<div class="rv-plan"><span class="mk-badge-done">✓ 清单中已做到 · 去<a href="/tools/saved/">我的清单</a>管理</span></div>':`<div class="rv-plan">
    <button type="button" class="mk-btn mk-todo ${t==="todo"?"on":""}" data-act="todo">
      ${t==="todo"?"✓ 已在清单":"加入清单"}
    </button>
    <button type="button" class="mk-btn mk-dismiss ${t==="dismiss"?"on":""}" data-act="dismiss">
      ${t==="dismiss"?"⊘ 已标暂不适合":"⊘ 暂不适合"}
    </button>
  </div>`:""}function F(t,e=d()){return(t?.box??0)<2?!1:v(t,e)==="cooling"}function P(t,e){if(!t||!e?.key)return;const n=p()[e.key];let i=F(n),r=!1,o=$();const l=()=>{o=$();const E=d(),b=p()[e.key],m=q(o,e.key),u=v(b,E),g=z(u,{voluntaryRecall:r}),S=(b?.box??0)>=1,x=u==="recall"||u==="cooling"||u==="pending"?"先只看标题。不看正文，能不能脱口而出核心原理？再翻开对照。":"先只看标题。想一想：核心原理是什么？再翻开对照。",C=[e.rank!=null?String(e.rank):null,e.chapterTitle,e.num!=null?`第 ${e.num} 条`:null].filter(Boolean).join(" · ");t.className="rv-slip slip",t.dataset.rvKey=e.key,t.innerHTML=`
      <div class="slip-header">
        <span class="slip-loc">${s(C||"条目")}</span>
        <span class="slip-head-r">
          ${N(m)}
          ${T(e)}
        </span>
      </div>
      <h3 class="rv-title">${s(e.title)}</h3>
      ${i?`
        ${A(e)}
        ${K(u,b,{voluntaryRecall:g==="recall"&&(u==="cooling"||u==="pending")})}
        ${D(g)}
        ${j(m,S)}
      `:`
        <p class="rv-hint">${x}</p>
        <button type="button" class="btn primary rv-flip">翻开看看</button>
      `}`,t.querySelector(".rv-flip")?.addEventListener("click",()=>{const a=p()[e.key],c=v(a,d());r=B(c,a),i=!0,l()}),t.querySelectorAll("[data-rate]").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.rate,R=v(p()[e.key],d()),k=_(e.key,c);r=!1,f(R==="understand"?c==="remembered"?`理解了！下次温习 ${k.due}`:"未理解已记下，明天再推送":c==="remembered"?`记得！已连续 ${k.box} 次 · 下次 ${k.due}`:"不完全记得，已退回温习池"),y("srs_rate_slip",e.key),l(),t.dispatchEvent(new CustomEvent("livebetter:slip-changed",{bubbles:!0}))})}),t.querySelector('[data-act="todo"]')?.addEventListener("click",()=>{const a=L(o,e.key);o=a.marks,h(o),y(a.state==="todo"?"mark_todo":"mark_clear",e.key),f(a.state==="todo"?"已加入清单":"已移出清单"),l(),t.dispatchEvent(new CustomEvent("livebetter:slip-changed",{bubbles:!0}))}),t.querySelector('[data-act="dismiss"]')?.addEventListener("click",()=>{const a=M(o,e.key);o=a.marks,h(o),y(a.state==="dismiss"?"mark_dismiss":"mark_clear",e.key),f(a.state==="dismiss"?"已标记为暂不适合":"已取消标记"),l(),t.dispatchEvent(new CustomEvent("livebetter:slip-changed",{bubbles:!0}))})};l()}function V(t,e){t.querySelectorAll("[data-rv]").forEach(n=>{const i=n.dataset.rv,r=e[i];if(!r)return;const o=n.dataset.rvWhy||r.why,l=n.dataset.rvRank?Number(n.dataset.rvRank):r.rank;P(n,{...r,why:o||void 0,rank:Number.isFinite(l)?l:r.rank})})}function J(t,e){t.querySelectorAll("details[data-rv-lazy]").forEach(n=>{let i=!1;const r=()=>{i||(i=!0,V(n,e))};n.open?r():n.addEventListener("toggle",()=>{n.open&&r()},{once:!0})})}export{J as a,V as m};
