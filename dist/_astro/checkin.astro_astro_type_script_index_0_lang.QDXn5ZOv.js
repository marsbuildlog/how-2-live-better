import{s as G,b as X,d as w,a as pe,w as q,c as Z,e as ye,f as ee,n as H,r as he,m as O,g as te,h as be,p as me,j as ve,B as N}from"./srs-core.k71dYATi.js";const J="livebetter.checkin.v1";function se(u,T){return u?u.v===1?O(te(be(u,T))):u.v===2?O(te(u)):u.v===3?O(u):u.v===4?{...u,srs:u.srs&&typeof u.srs=="object"&&!Array.isArray(u.srs)?u.srs:{},checkinAt:Number(u.checkinAt)||0,srsAt:Number(u.srsAt)||0}:null:null}function $e(u,T=[],K=[]){const E=new Map(u.map(e=>[e.key,e])),_=new Map(u.map(e=>[e.id,e])),$=K.map(e=>e.key),ne=new Map(K.map(e=>[e.key,e])),R=document.getElementById("app"),k=e=>String(e??"").replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]);let x=[],D=0,A=!1;function V(){return{v:4,habits:u.filter(e=>e.def).map(e=>e.key),weekly:[],log:{},wlog:{},todos:[],srs:{},checkinAt:0,srsAt:0}}function ae(){try{return JSON.parse(localStorage.getItem(J))}catch{return null}}function m(e={}){const s=Date.now();t.checkinAt=s,e.touchSrs&&(t.srsAt=s);try{localStorage.setItem(J,JSON.stringify(t))}catch{}try{window.dispatchEvent(new CustomEvent("livebetter:checkin-changed"))}catch{}}let t=V();const M=ae();if(M){const e=se(M,_);if(e&&(t=e,M.v!==4))try{localStorage.setItem(J,JSON.stringify(t))}catch{}}window.addEventListener("livebetter:synced",e=>{const s=se(e.detail,_);s&&(t=s,b())});let g=new URLSearchParams(location.search).get("tab")??($.length?"review":"daily");["daily","weekly","todo","review"].includes(g)||(g=$.length?"review":"daily"),g==="review"&&!$.length&&(g="daily");const C=()=>w(),P=()=>t.log[C()]??[],le=()=>t.wlog[q()]??[],ce=e=>{const s=w(),n=t.log[s]??[],i=n.indexOf(e);return i===-1?(n.push(e),f("checkin_done",e)):(n.splice(i,1),f("checkin_undone",e)),n.length?t.log[s]=n:delete t.log[s],m(),i===-1},oe=e=>{const s=q(),n=t.wlog[s]??[],i=n.indexOf(e);return i===-1?(n.push(e),f("checkin_done","w:"+e)):(n.splice(i,1),f("checkin_undone","w:"+e)),n.length?t.wlog[s]=n:delete t.wlog[s],m(),i===-1};function f(e,s){typeof gtag=="function"&&gtag("event",e,{habit_id:s,habit_count:t.habits.length+t.weekly.length})}function h(e){const s=document.createElement("div");s.className="toast",s.textContent=e,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),setTimeout(()=>s.remove(),2200)}function b(){const e=t.todos.filter(y=>!y.done).length,n=($.length?G({keys:$,cards:t.srs,today:C()}):null)?.due??0,i=g==="daily"||g==="weekly",l=u.filter(y=>y.freq!=="weekly"),a=u.filter(y=>y.freq==="weekly"),r=g==="weekly"?`管理每周打卡项 (${t.weekly.length}/${a.length})`:`管理每日打卡项 (${t.habits.length}/${l.length})`;R.innerHTML=`
    <div class="ck-tabs" role="tablist">
      ${$.length?`
        <button class="ck-tab ${g==="review"?"on":""}" data-tab="review" role="tab" aria-selected="${g==="review"}">温习${n?` · ${n}`:""}</button>
      `:""}
      <button class="ck-tab ${g==="daily"?"on":""}" data-tab="daily" role="tab" aria-selected="${g==="daily"}">每日</button>
      <button class="ck-tab ${g==="weekly"?"on":""}" data-tab="weekly" role="tab" aria-selected="${g==="weekly"}">每周</button>
      <button class="ck-tab ${g==="todo"?"on":""}" data-tab="todo" role="tab" aria-selected="${g==="todo"}">待办${e?` · ${e}`:""}</button>
    </div>
    <div id="view"></div>
    <section class="card ck-manage-cta">
      ${i?`<button class="btn ghost" id="manage">${r}</button>`:"<span></span>"}
      <div class="ck-tools">
        <button class="linkish" id="export">导出数据</button>
        <button class="linkish danger" id="clear">清空</button>
      </div>
    </section>
    <p class="foot">习惯条目来自 <a href="https://github.com/eternity4719/HowToLiveBetter" target="_blank" rel="nofollow noopener">《高性价比人生指南》</a>
      (CC BY 4.0) · 点条目名可读原文依据 · 不构成医疗建议</p>`,R.querySelectorAll("[data-tab]").forEach(y=>y.addEventListener("click",()=>{g=y.dataset.tab,b()})),{daily:ie,weekly:re,todo:ge,review:j}[g]?.(),de()}function de(){document.getElementById("manage")?.addEventListener("click",z),document.getElementById("export")?.addEventListener("click",()=>{navigator.clipboard.writeText(JSON.stringify(t)).then(()=>h("已复制打卡数据 (JSON) 到剪贴板")).catch(()=>h("复制失败"))}),document.getElementById("clear")?.addEventListener("click",e=>{e.target.dataset.arm?(t=V(),m({touchSrs:!0}),g="daily",b(),h("已清空")):(e.target.dataset.arm="1",e.target.textContent="再点一次确认清空",setTimeout(()=>{delete e.target.dataset.arm,e.target.textContent="清空"},3e3))})}function j(){const e=document.getElementById("view"),s=C(),n=G({keys:$,cards:t.srs,today:s});x.length||(x=X({keys:$,cards:t.srs,today:s,limit:N}),D=0,A=!1);const i=`
      <div class="ck-date">认知与记忆 · 间隔重复温习</div>
      <div class="ck-rev-stats" role="group" aria-label="温习进度">
        <div class="ck-rev-stat">
          <b>${n.due}</b>
          <span>待复习</span>
        </div>
        <div class="ck-rev-stat">
          <b>${n.reviewedToday}</b>
          <span>今天已温习</span>
        </div>
        <div class="ck-rev-stat">
          <b>${n.started}</b>
          <span>已入循环 / ${n.total}</span>
        </div>
      </div>
      ${n.nextDue&&!n.due?`<p class="ck-meta">下一波到期 ${k(n.nextDue)}</p>`:""}
      <p class="ck-hint">只看标题 → 试着回忆原理 → 翻开对照 → 点「记得 / 不完全记得」。记得的隔几天再考；忘了的明天再来。新条目也会按天少量塞进队列。</p>`,l=()=>{document.getElementById("rev-more")?.addEventListener("click",()=>{let v=X({keys:$,cards:t.srs,today:s,limit:N});if(!v.length){const L=me({keys:$,cards:t.srs,today:s,limit:N});t.srs=L.cards,v=L.queue,m({touchSrs:!0})}v.length?(x=v,D=0,A=!1,b()):h("全部条目都已学完且无到期复习！")})};if(!x.length){e.innerHTML=`
      <section class="card ck-head">${i}</section>
      <section class="card" style="text-align:center;padding:24px 16px;">
        <p class="done" style="font-size:16px;font-weight:600;margin-bottom:8px;">今天没有待温习的条目</p>
        <p class="ck-hint" style="margin:0 0 14px;">可以点下面提前抽几条，或去阶段手册 / 条目页点「理解了」把建议送进记忆循环。</p>
        <button class="btn primary" id="rev-more">提前温习 3 条</button>
      </section>`,l();return}if(D>=x.length){e.innerHTML=`
      <section class="card ck-head">${i}</section>
      <section class="card" style="text-align:center;padding:24px 16px;">
        <p class="done" style="font-size:16px;font-weight:600;margin-bottom:14px;">✓ 这批 ${x.length} 条已温习完</p>
        <button class="btn primary" id="rev-more">再来 3 条</button>
      </section>`,l();return}const a=x[D],r=ne.get(a.key);if(!r){D++,j();return}const y=a.kind==="new"?"新条目初见":`复习 (逾期 ${Math.max(0,a.overdue)} 天)`,d=a.kind==="new"?"未理解":"不完全记得",o=a.kind==="new"?"理解了":"记得",c=a.kind==="new"?"先只看标题。想一想：核心原理是什么？再翻开对照。":"先只看标题。不看正文，能不能脱口而出核心原理？再翻开对照。";e.innerHTML=`
    <section class="card ck-head">${i}</section>
    <section class="card">
      <div class="ck-rev-card">
        <span class="ck-rev-kind">${k(y)}</span>
        <h3 class="ck-rev-title">${k(r.title)}</h3>
        ${A?`
          <p class="ck-rev-plain">${k(r.plain)}</p>
          <div class="ck-rev-acts">
            <button class="btn" id="rev-forgot">${k(d)}</button>
            <button class="btn primary" id="rev-remembered">${k(o)}</button>
          </div>
        `:`
          <p class="ck-hint" style="margin:0 0 12px;">${k(c)}</p>
          <button class="btn primary ck-rev-flip" id="rev-flip">翻开看看</button>
        `}
        <div style="margin-top:12px;">
          <a href="/q/${k(r.slug)}/" target="_blank" class="ck-rev-link">在条目详情页查看出处 →</a>
        </div>
      </div>
    </section>`,document.getElementById("rev-flip")?.addEventListener("click",()=>{A=!0,j()});const p=v=>{t.srs[a.key]=ve(t.srs[a.key],v,s),m({touchSrs:!0}),f("srs_rate_checkin",a.key),a.kind==="new"?h(v==="remembered"?"理解了！过几天会再次考你（先看标题回忆）":"未理解已记下，明天再推送"):h(v==="remembered"?"真棒，形成肌肉记忆！":"不完全记得，已退回温习池，明天再来"),D++,A=!1,b()};document.getElementById("rev-forgot")?.addEventListener("click",()=>p("forgot")),document.getElementById("rev-remembered")?.addEventListener("click",()=>p("remembered"))}function ie(){const e=document.getElementById("view"),s=P(),n=t.habits.map(d=>E.get(d)).filter(Boolean),i=n.filter(d=>s.includes(d.key)).length,l=n.length>0&&i===n.length,a=new Date,r=[...Array(7)].map((d,o)=>{const c=new Date;return c.setDate(c.getDate()-(6-o)),{key:w(c),label:"日一二三四五六"[c.getDay()],isToday:o===6}}),y=Object.values(t.log).reduce((d,o)=>d+o.length,0);e.innerHTML=`
    <section class="card ck-head">
      <div class="ck-date">${a.getMonth()+1} 月 ${a.getDate()} 日 · 星期${"日一二三四五六"[a.getDay()]}</div>
      <div class="ck-streak"><b>${pe(t.log)}</b><span>天连续 🔥</span></div>
      <div class="progress"><div class="bar" style="width:${n.length?i/n.length*100:0}%"></div><span>${i} / ${n.length}</span></div>
      ${l?'<p class="ck-all">✓ 今天全做完了。书里说, 这种事拼的不是单次多猛, 是别断。</p>':'<p class="ck-hint">点一下就算打卡。做完哪件点哪件, 不用一次全齐。</p>'}
    </section>

    <section class="card">
      <div class="ck-rows">
        ${n.map(d=>`
          <button class="ck-row ${s.includes(d.key)?"done":""}" data-habit="${d.key}" aria-pressed="${s.includes(d.key)}">
            <span class="ck-check" aria-hidden="true"></span>
            <span class="ck-label">${k(d.label)}</span>
            <span class="ck-ev">${k(d.evidence)}</span>
          </button>`).join("")}
      </div>
      ${n.length?"":'<p class="ck-hint">还没有打卡项, 去「管理」里挑几件。</p>'}
    </section>

    <section class="card">
      <h2 class="ck-sub">最近 7 天</h2>
      <div class="ck-week">
        <div class="ck-week-grid" style="grid-template-columns: 1fr repeat(7, 26px);">
          <span></span>
          ${r.map(d=>`<span class="ck-wd ${d.isToday?"today":""}">${d.label}</span>`).join("")}
          ${t.habits.map(d=>{const o=E.get(d);return o?`<span class="ck-wh" data-slug="${k(o.slug??"")}">${k(o.label)}</span>`+r.map(c=>`<span class="ck-dot ${(t.log[c.key]??[]).includes(d)?"on":""}"></span>`).join(""):""}).join("")}
        </div>
      </div>
      <p class="ck-meta">累计打卡 ${y} 次 · 数据只存在这台设备上</p>
    </section>`,e.querySelectorAll("[data-habit]").forEach(d=>{d.addEventListener("click",()=>{const o=ce(d.dataset.habit),c=P(),p=t.habits.length;o&&p&&c.length===p?h("✓ 今天全做完了, 明天见"):o&&h(`已打卡 ${c.length}/${p}`),b()})}),e.querySelectorAll(".ck-wh").forEach(d=>{d.addEventListener("click",()=>{d.dataset.slug&&window.open(`/q/${d.dataset.slug}/`,"_self")})})}function re(){const e=document.getElementById("view"),s=le(),n=t.weekly.map(o=>E.get(o)).filter(Boolean),i=n.filter(o=>s.includes(o.key)).length,l=n.length>0&&i===n.length,a=new Date,r=new Date(a);r.setDate(a.getDate()-(a.getDay()+6)%7);const y=new Date(r);y.setDate(r.getDate()+6);const d=o=>`${o.getMonth()+1}.${o.getDate()}`;e.innerHTML=`
    <section class="card ck-head">
      <div class="ck-date">${d(r)} – ${d(y)} · ${q()} · 复查型</div>
      <div class="ck-streak"><b>${Z(t.wlog)}</b><span>周连续 🔥</span></div>
      <div class="progress"><div class="bar" style="width:${n.length?i/n.length*100:0}%"></div><span>${i} / ${n.length}</span></div>
      ${l?'<p class="ck-all">✓ 这周的复查型动作都齐了。书里说, 复查的意义是「在变坏之前发现变坏」。</p>':'<p class="ck-hint">「本周做没做」说得清的事。周一早上自动翻开新的一周。</p>'}
    </section>

    <section class="card">
      <div class="ck-rows">
        ${n.map(o=>`
          <button class="ck-row ${s.includes(o.key)?"done":""}" data-whabit="${o.key}" aria-pressed="${s.includes(o.key)}">
            <span class="ck-check" aria-hidden="true"></span>
            <span class="ck-label">${k(o.label)}<small class="ck-wk-note">${k(o.title)}</small></span>
            <span class="ck-ev">${k(o.evidence)}</span>
          </button>`).join("")}
      </div>
      ${n.length?"":'<p class="ck-hint">还没有每周项。去「管理」里挑几件复查型动作 (力量训练 / 工时上限 / 饮酒盘点…)。</p>'}
    </section>`,e.querySelectorAll("[data-whabit]").forEach(o=>{o.addEventListener("click",()=>{oe(o.dataset.whabit)&&h(`已记入本周 · 连续 ${Z(t.wlog)} 周`),b()})})}const ue=["日","一","二","三","四","五","六"];function ke(e){const s=ee(e.due);if(!s)return null;if(s==="today")return{cls:"today",txt:"今天到期"};if(s==="overdue")return{cls:"overdue",txt:`过期 ${Math.round((new Date(w()+"T12:00")-new Date(e.due+"T12:00"))/864e5)} 天`};const n=Math.round((new Date(e.due+"T12:00")-new Date(w()+"T12:00"))/864e5);if(s==="soon")return{cls:"soon",txt:n===1?"明天到期":`还剩 ${n} 天`};const i=new Date(e.due+"T12:00");return{cls:"later",txt:`${i.getMonth()+1}月${i.getDate()}日 · 周${ue[i.getDay()]}`}}function W(e){const s=ke(e);return`
    <div class="ck-row td-row ${e.done?"done":""}" data-td="${e.key}">
      <button class="td-check" data-td-toggle="${e.key}" aria-label="${e.done?"标记未完成":"标记完成"}" aria-pressed="${e.done}">
        <span class="ck-check" aria-hidden="true"></span>
      </button>
      <span class="ck-label">${k(e.title)}${e.slug?`<a class="td-book" href="/q/${k(e.slug)}/" target="_blank">原文</a>`:""}</span>
      ${s?`<span class="td-due ${s.cls}">${s.txt}</span>`:""}
      <button class="td-del" data-td-del="${e.key}" aria-label="删除">✕</button>
    </div>`}function ge(){const e=document.getElementById("view"),s=ye(t.todos.filter(l=>!l.done)),n=t.todos.filter(l=>l.done).sort((l,a)=>(a.doneAt??0)-(l.doneAt??0)),i=s.filter(l=>ee(l.due)==="overdue").length;e.innerHTML=`
    <section class="card">
      <h2 class="ck-sub">加一件待办</h2>
      <form class="todo-form" id="todo-form">
        <input type="text" id="td-title" placeholder="例: 6 月底前换驾照 · 下周三复查血压" maxlength="60" required>
        <input type="date" id="td-due" aria-label="截止日 (可不填)">
        <button class="btn primary" type="submit">加入</button>
      </form>
      ${T.length?`
      <div class="td-tpls">
        <span class="td-tpls-cap">常用</span>
        ${T.filter(l=>!t.todos.some(a=>a.key===l.key)).map(l=>`<button class="td-tpl" data-tpl="${l.key}" data-slug="${k(l.slug)}">+ ${k(l.label)}</button>`).join("")}
      </div>`:""}
      <p class="ck-meta">复查周期、证件效期、体检预约这类「到点要做一次」的事放这里; 到期置顶标红。
      到点推送提醒在付费版路线图上, 上线前先用这页盯着。</p>
    </section>

    <section class="card">
      <h2 class="ck-sub">要做的 (${s.length}${i?` · <b class="td-overdue-n">${i} 件过期</b>`:""})</h2>
      <div class="ck-rows">
        ${s.map(W).join("")}
      </div>
      ${s.length?"":`<p class="ck-hint">${t.todos.length?"都做完了, 清爽。":"还没有待办。在上面加一件即可。"}</p>`}
    </section>

    ${n.length?`
    <section class="card">
      <div class="ck-done-head">
        <h2 class="ck-sub">已完成 (${n.length})</h2>
        <button class="linkish danger" id="td-clear-done">清除已完成</button>
      </div>
      <div class="ck-rows">${n.slice(0,20).map(W).join("")}</div>
      ${n.length>20?'<p class="ck-meta">只显示最近 20 条, 数据都还在。</p>':""}
    </section>`:""}`,document.getElementById("todo-form").addEventListener("submit",l=>{l.preventDefault();const a=document.getElementById("td-title").value.trim(),r=document.getElementById("td-due").value||null;a&&(t.todos.push(H({title:a,due:r})),f("todo_add",r??"nodue"),m(),h("已加入待办"+(r?" · 到期会标红置顶":"")),b())}),e.querySelectorAll("[data-td-toggle]").forEach(l=>{l.addEventListener("click",()=>{const a=t.todos.find(r=>r.key===l.dataset.tdToggle);a&&(a.done=!a.done,a.doneAt=a.done?Date.now():null,f(a.done?"todo_done":"todo_undone",a.key.slice(0,12)),m(),a.done&&h("✓ 干净了"),b())})}),e.querySelectorAll("[data-td-del]").forEach(l=>{l.addEventListener("click",()=>{t.todos=t.todos.filter(a=>a.key!==l.dataset.tdDel),f("todo_delete",l.dataset.tdDel.slice(0,12)),m(),b()})}),e.querySelectorAll("[data-tpl]").forEach(l=>{l.addEventListener("click",()=>{const a=T.find(r=>r.key===l.dataset.tpl);a&&(t.todos.push(H({title:a.label,slug:a.slug,ref:a.key})),f("todo_add","tpl:"+a.key),m(),h("已加入待办 · 记得补个截止日"),b())})}),document.getElementById("td-clear-done")?.addEventListener("click",l=>{l.target.dataset.arm?(t.todos=t.todos.filter(a=>!a.done),m(),b(),h("已清除")):(l.target.dataset.arm="1",l.target.textContent="再点一次确认",setTimeout(()=>{delete l.target.dataset.arm,l.target.textContent="清除已完成"},3e3))})}function z(){const e=u.filter(c=>c.freq!=="weekly"),s=u.filter(c=>c.freq==="weekly"),n=g==="weekly"?"weekly":"daily",i=[...new Set(e.map(c=>c.group))],l=document.getElementById("app"),a=i.map(c=>`
      <h3 class="ck-group">每日 · ${c}</h3>
      <div class="ck-rows">
        ${e.filter(p=>p.group===c).map(p=>o(p,t.habits.includes(p.key))).join("")}
      </div>`).join(""),r=`
      <h3 class="ck-group">每周 · 复查型 (点一下记「本周做过了」)</h3>
      <div class="ck-rows">
        ${s.map(c=>o(c,t.weekly.includes(c.key))).join("")}
      </div>`,y=n==="weekly"?"挑每周要复查的事":"挑每日要打卡的事",d=n==="weekly"?"这些是书里带「每周」语义的复查型动作。少选几件更容易坚持；要管每日习惯请切到「每日」。":"全部来自书里的零成本高收益条目。少选几件更容易连续；要管每周复查请切到「每周」。";l.innerHTML=`
    <section class="card">
      <div class="kicker">管理</div>
      <h2 style="font-size:24px;font-weight:500;margin-bottom:8px;">${y}</h2>
      <p class="lead">${d}</p>
      <div class="ck-tabs ck-manage-tabs" role="tablist" aria-label="打卡项类型">
        <button class="ck-tab ${n==="daily"?"on":""}" data-mg-freq="daily" role="tab" aria-selected="${n==="daily"}">每日 (${t.habits.length}/${e.length})</button>
        <button class="ck-tab ${n==="weekly"?"on":""}" data-mg-freq="weekly" role="tab" aria-selected="${n==="weekly"}">每周 (${t.weekly.length}/${s.length})</button>
      </div>
      ${n==="weekly"?r:a}
      <button class="btn primary" id="back">完成, 回去打卡</button>
    </section>`;function o(c,p){return`
      <div class="ck-mg-row ${p?"sel":""}" data-mg="${c.key}">
        <button class="ck-row ${p?"done":""}" data-habit="${c.key}" aria-pressed="${p}">
          <span class="ck-check" aria-hidden="true"></span>
          <span class="ck-label">${k(c.label)}</span>
          <span class="ck-ev">${k(c.evidence)} 级证据</span>
        </button>
        <div class="ck-book">
          <a href="/q/${c.slug}/" target="_blank">📖 ${k(c.title)}</a>
          <p>${k(c.plain.slice(0,90))}…</p>
        </div>
      </div>`}l.querySelectorAll("[data-mg-freq]").forEach(c=>{c.addEventListener("click",()=>{g=c.dataset.mgFreq,z()})}),l.querySelectorAll("[data-habit]").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.habit,v=E.get(p)?.freq==="weekly",L=v?t.weekly:t.habits,B=L.indexOf(p);B===-1?L.push(p):L.splice(B,1),m(),c.closest(".ck-mg-row")?.classList.toggle("sel",B===-1),c.setAttribute("aria-pressed",String(B===-1)),c.classList.toggle("done",B===-1),h(B===-1?v?"已加入每周打卡":"已加入今日打卡":"已移除");const Y=l.querySelector('[data-mg-freq="daily"]'),Q=l.querySelector('[data-mg-freq="weekly"]');Y&&(Y.textContent=`每日 (${t.habits.length}/${e.length})`),Q&&(Q.textContent=`每周 (${t.weekly.length}/${s.length})`)})}),document.getElementById("back")?.addEventListener("click",b)}const S=new URLSearchParams(location.search),I=he(S.get("add"),E,_);if(I){const e=E.get(I)?.freq==="weekly",s=e?t.weekly:t.habits;s.includes(I)||(s.push(I),m(),e&&(g="weekly"),setTimeout(()=>h(`已加入${e?"每周":""}打卡: ${E.get(I).label}`),300)),history.replaceState(null,"",location.pathname)}if(S.get("todo")){const e=S.get("ref");(!e||!t.todos.some(s=>s.key===e))&&(t.todos.push(H({title:S.get("todo").slice(0,60),due:/^\d{4}-\d{2}-\d{2}$/.test(S.get("due")??"")?S.get("due"):null,slug:S.get("slug"),ref:e})),f("todo_add","deeplink"),m(),g="todo",setTimeout(()=>h("已列入待办"),300)),history.replaceState(null,"",location.pathname)}b();let F=w(),U=q();setInterval(()=>{(w()!==F||q()!==U)&&(F=w(),U=q(),b())},3e4)}$e(JSON.parse(document.getElementById("checkin-payload").textContent),JSON.parse(document.getElementById("todo-templates").textContent),JSON.parse(document.getElementById("review-items").textContent));
