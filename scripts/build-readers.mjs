import {readFile,writeFile} from 'node:fs/promises';
import {marked} from 'marked';
import sanitize from 'sanitize-html';
const docs=[['portfolio-evidence','Evidence & methodology'],['commit-log','Commit log']];
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
for(const [slug,title] of docs){
 const source=await readFile(`dist/${slug}.md`,'utf8');
 let html=sanitize(marked.parse(source),{allowedTags:sanitize.defaults.allowedTags.concat(['img']),allowedAttributes:{...sanitize.defaults.allowedAttributes,th:['align'],td:['align'],img:['src','alt']}});
 const sections=[],ids=new Map();
 html=html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g,(_,level,text)=>{const plain=text.replace(/<[^>]*>/g,'');const base=plain.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,'').trim().replace(/\s+/g,'-');const n=ids.get(base)||0;ids.set(base,n+1);const id=base+(n?`-${n}`:'');if(level==='2')sections.push([id,plain]);return `<h${level} id="${escape(id)}">${text}</h${level}>`;});
 html=html.replace(/href="(portfolio-evidence|commit-log)\.md(#[^"]*)?"/g,'href="$1.html$2"').replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable data table"><table>').replace(/<\/table>/g,'</table></div>');
 const nav=docs.map(([id,label])=>`<a href="${id}.html" ${id===slug?'aria-current="page"':''}>${escape(label)}</a>`).join('');
 const toc=sections.map(([id,label])=>`<a href="#${escape(id)}">${escape(label)}</a>`).join('');
 await writeFile(`dist/${slug}.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} — Dami Kang</title><link rel="stylesheet" href="reader.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;600&display=swap" rel="stylesheet"></head><body><a class="skip" href="#document">Skip to document</a><header><a class="brand" href="index.html">Dami Kang</a><a class="back" href="index.html#activity">← Back to portfolio</a></header><div class="reader-layout"><aside><p class="eyebrow">PORTFOLIO / DOCUMENTS</p><nav aria-label="Documents">${nav}</nav><details open><summary>On this page</summary><nav class="toc" aria-label="Document sections">${toc}</nav></details><a class="download" href="${slug}.md" download>Download Markdown ↓</a></aside><main id="document"><div class="document-meta">SOURCE NOTES <span>14 NOVEMBER 2026</span></div><article>${html}</article><footer><a href="index.html#activity">← Back to portfolio</a><a href="#document">Back to top ↑</a></footer></main></div></body></html>`);
 console.log(`Rendered ${slug}: ${sections.length} sections`);
}
