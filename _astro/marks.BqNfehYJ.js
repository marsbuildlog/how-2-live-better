import{l as f,m as w,t as M,s as g,a as S,c as T,b as u}from"./marks-core.eLEXBvcy.js";import{l as E,r as C}from"./srs-storage.CIu3V8OW.js";const k=o=>String(o??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$=(o,t)=>{typeof gtag=="function"&&gtag("event",o,{mark_id:String(t).slice(0,14)})};function h(o){const t=document.createElement("div");t.className="toast",t.textContent=o,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>t.remove(),2200)}function j(o,t){let d=f();const p=()=>{const i=w(d,t.key),a=E()[t.key],n=!a?`<div class="mk-cog-card">
          <div class="mk-cog-info">
            <span class="mk-cog-badge">认知理解</span>
            <span class="mk-cog-prompt">读完这项建议，看懂核心原理与论据了吗？</span>
          </div>
          <div class="mk-cog-btns">
            <button class="mk-cog-btn" data-cog="forgot">未理解</button>
            <button class="mk-cog-btn primary" data-cog="remembered">理解了</button>
          </div>
        </div>`:`<div class="mk-cog-card">
          <div class="mk-cog-info">
            <span class="mk-cog-badge learned">${a.box>=1?"已理解":"待再读"}</span>
            <span class="mk-cog-prompt">${a.box>=1?"理解已记下。记忆检验请到温习页：先看标题回忆，再翻开对照。":"上次未理解。可稍后再读一次，或去温习页按计划重看。"}</span>
            <span class="mk-cog-meta">下次温习 ${k(a.due)}${a.box>=1?` · 已连续记得 ${a.box} 次`:""}</span>
          </div>
          <div class="mk-cog-btns">
            <a class="mk-cog-btn primary" href="/tools/checkin/?tab=review">去温习页 →</a>
          </div>
        </div>`;o.innerHTML=`
    <div class="mk-container">
      ${n}

      <!-- 行动规划操作条 -->
      <div class="mk-bar">
        <div class="mk-seg" role="group" aria-label="规划这条建议">
          ${i==="done"?'<span class="mk-badge-done" title="已做到仅在「我的清单」中勾选或撤销">✓ 清单中已做到</span>':`
              <button class="mk-btn mk-todo ${i==="todo"?"on":""}" data-act="todo" aria-pressed="${i==="todo"}">
                ${i==="todo"?"✓ 已在清单":"加入清单"}
              </button>
              <button class="mk-btn mk-dismiss ${i==="dismiss"?"on":""}" data-act="dismiss" aria-pressed="${i==="dismiss"}">
                ${i==="dismiss"?"⊘ 已标暂不适合":"⊘ 暂不适合"}
              </button>
            `}
        </div>
        <div class="mk-links">
          ${t.checkinHref?`<a href="${t.checkinHref}">⏱ 加入打卡</a>`:""}
          <a href="/tools/saved/">去我的清单 →</a>
        </div>
      </div>
    </div>`,o.querySelector('[data-act="todo"]')?.addEventListener("click",()=>{const c=M(d,t.key);d=c.marks,g(d),$(c.state==="todo"?"mark_todo":"mark_clear",t.key),h(c.state==="todo"?"已加入清单":"已移出清单"),p()}),o.querySelector('[data-act="dismiss"]')?.addEventListener("click",()=>{const c=S(d,t.key);d=c.marks,g(d),$(c.state==="dismiss"?"mark_dismiss":"mark_clear",t.key),h(c.state==="dismiss"?"已标记为「暂不适合当前阶段」":"已取消标记"),p()}),o.querySelectorAll("[data-cog]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.cog;C(t.key,m),h(m==="remembered"?"理解了！过几天会在温习页考你（先看标题再翻开）":"已记下，明天再推送温习"),$("srs_rate_page",{item:t.key,rating:m}),p()})})};p()}function q(o,t){const d=()=>{const p=f(),i=E();let l=0,a=0,v=0;for(const m of t.keys){const b=w(p,m);b==="done"?l++:b==="todo"&&a++,i[m]?.box>=1&&v++}const n=t.keys.length,c=n?l/n*100:0;o.hidden=!1,o.innerHTML=`
      <span class="sp-bar"><span style="width:${c}%"></span></span>
      <span class="sp-num">已理解 ${v}</span>
      ${a?`<span class="sp-todo">· 清单中 ${a}</span>`:""}
      ${l?`<span class="sp-num">· 已做到 ${l}</span>`:""}
      <span class="sp-todo" style="color:var(--text-faint)">/ ${n}</span>
      <a class="sp-link" href="/tools/saved/">我的清单 →</a>
      <a class="sp-link" href="/tools/checkin/?tab=review">温习 →</a>`};d(),document.addEventListener("livebetter:slip-changed",d),window.addEventListener("livebetter:checkin-changed",d),window.addEventListener("livebetter:synced",d)}function A(o,t){const d=Object.entries(t.items).map(([a,v])=>({key:a,chapterId:v[0],title:v[1],slug:v[2]})),p=new Map(t.chapters),i=new Map(d.map(a=>[a.key,a])),l=()=>{let a=f();const v=E(),n=T({marks:a,srsCards:v,totalItems:d.length}),c=Object.entries(a).filter(([,s])=>s?.s==="todo").sort((s,e)=>(e[1].at??0)-(s[1].at??0)).map(([s])=>i.get(s)).filter(Boolean),m=new Map;for(const[s,e]of Object.entries(a)){if(e?.s!=="done")continue;const r=i.get(s);r&&(m.has(r.chapterId)||m.set(r.chapterId,[]),m.get(r.chapterId).push(r))}const b=Object.entries(a).filter(([,s])=>s?.s==="dismiss").sort((s,e)=>(e[1].at??0)-(s[1].at??0)).map(([s])=>i.get(s)).filter(Boolean),L=(s,e)=>`
      <div class="sv-row" data-sv="${s.key}">
        <button class="td-check ${e==="done"?"done":""}" data-mk-btn="${s.key}"
          aria-label="${e==="done"?"撤销已做到, 回到清单":"标记为已做到"}"
          title="${e==="done"?"撤销: 回到清单":"做到了, 点一下打勾"}">
          <span class="ck-check" aria-hidden="true"></span>
        </button>
        <a class="sv-title" href="/q/${k(s.slug)}/">${k(s.title)}</a>
        <span class="sv-ch">${k(p.get(s.chapterId)??s.chapterId)}</span>
        ${e==="todo"?`
          <button class="sv-restore-btn" data-to-dismiss="${s.key}" title="标记为暂不适合当前阶段">暂不适合</button>
          <span class="sv-remove" data-mk-x="${s.key}" role="button" tabindex="0" aria-label="移除">✕</span>
        `:""}
      </div>`,x=c.length?"":Object.keys(a).length?"清单里的都做完了，成就达成！":'<span class="sv-where">还没有标记。去<a href="/stages/">阶段手册</a>或条目页点「加入清单」。</span>',y=Math.round(n.achievementRate);o.innerHTML=`
    <section class="card sv-head">
      <div class="sv-score">
        <b class="${y===100?"done-100":""}">${y}<small>%</small></b>
        <span>专属清单达成率<br><em>已做到 ${n.done} 件 · 计划清单共 ${n.achievementTotal} 件</em></span>
      </div>
      <div class="progress"><div class="bar" style="width:${n.achievementRate}%"></div><span>目标 100%</span></div>

      <!-- 双轨三维度量看板 -->
      <div class="sv-metrics">
        <div class="sv-metric-card main">
          <span class="sv-metric-label">战术交付 · 专属清单达成率</span>
          <span class="sv-metric-val main">${y}%</span>
          <span class="sv-metric-sub">做到了 ${n.done} / 计划 ${n.achievementTotal} 件</span>
        </div>
        <div class="sv-metric-card">
          <span class="sv-metric-label">战略盘点 · 行动规划率</span>
          <span class="sv-metric-val">${n.planningRate.toFixed(1)}%</span>
          <span class="sv-metric-sub">计划 ${n.plannedTotal} 件 / 适用 ${n.applicableTotal} 件 (排除了 ${n.dismiss} 条暂不适合)</span>
        </div>
        <div class="sv-metric-card">
          <span class="sv-metric-label">知识底色 · 认知内化覆盖率</span>
          <span class="sv-metric-val">${n.cognitiveCoverage.toFixed(1)}%</span>
          <span class="sv-metric-sub">已深入记住 ${n.remembered} / ${n.totalItems} 条建议</span>
        </div>
      </div>

      <p class="ck-meta">全部数据只存于这台设备的浏览器中</p>
    </section>

    <section class="card">
      <h2 class="ck-sub">清单中 (${c.length})</h2>
      <p class="ck-hint">点左侧圆圈标记「已做到」，只有在这里点击才算做到。</p>
      <div class="ck-rows">${c.map(s=>L(s,"todo")).join("")}</div>
      ${c.length?"":`<p class="ck-hint">${x}</p>`}
    </section>

    <section class="card">
      <h2 class="ck-sub">已做到 (${n.done})</h2>
      ${n.done?[...m.entries()].map(([s,e])=>`
        <h3 class="ck-group">${k(p.get(s)??s)} · ${e.length}</h3>
        <div class="ck-rows">${e.map(r=>L(r,"done")).join("")}</div>`).join(""):'<p class="ck-hint">做到的事会记在这里，按章攒着底气。</p>'}
    </section>

    ${b.length?`
    <section class="card">
      <details class="sv-dismiss-details">
        <summary class="sv-dismiss-summary">暂不适合当前阶段的条目 (${b.length}) — 人生阶段晋升时可重新唤醒</summary>
        <div class="ck-rows" style="margin-top: 10px;">
          ${b.map(s=>`
            <div class="sv-row" data-sv="${s.key}">
              <span class="sv-title">${k(s.title)}</span>
              <span class="sv-ch">${k(p.get(s.chapterId)??s.chapterId)}</span>
              <button class="sv-restore-btn" data-restore-todo="${s.key}">加入清单</button>
              <span class="sv-remove" data-mk-x="${s.key}" role="button" tabindex="0" aria-label="移除">✕</span>
            </div>
          `).join("")}
        </div>
      </details>
    </section>
    `:""}`,o.querySelectorAll("[data-mk-btn]").forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.mkBtn,r=w(a,e)==="done";a=u(a,e,r?"todo":"done"),g(a),$(r?"mark_todo":"mark_done",e),h(r?"已回到清单中":"✓ 太棒了！已标记为做到，达成率已更新"),l()})}),o.querySelectorAll("[data-to-dismiss]").forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.toDismiss;a=u(a,e,"dismiss"),g(a),h("已标为暂不适合，进入阶段蓄水池"),l()})}),o.querySelectorAll("[data-restore-todo]").forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.restoreTodo;a=u(a,e,"todo"),g(a),h("已重新加入清单"),l()})}),o.querySelectorAll("[data-mk-x]").forEach(s=>{const e=()=>{a=u(a,s.dataset.mkX,null),g(a),$("mark_clear",s.dataset.mkX),l()};s.addEventListener("click",e),s.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),e())})})};l()}export{q as a,A as b,j as m};
