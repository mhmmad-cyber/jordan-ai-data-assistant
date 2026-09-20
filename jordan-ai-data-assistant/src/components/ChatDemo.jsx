import { useState } from 'react';
import { ArrowUp, Bot, Sparkles } from 'lucide-react';
import { mockReplies } from '../data/mockData';
const initial = [{ from: 'user', text: 'Why did sales decrease this month?' }, { from: 'bot', text: mockReplies.sales }];
function replyFor(value) {
  const v = value.toLowerCase();

  if (v.includes('forecast') || v.includes('projection') || v.includes('trend')) return mockReplies.forecast;
  if (v.includes('reorder') || v.includes('stock') || v.includes('inventory') || v.includes('product')) return mockReplies.reorder;
  if (v.includes('customer') || v.includes('clients') || v.includes('retention')) return mockReplies.customer;
  if (v.includes('sale') || v.includes('decrease') || v.includes('revenue') || v.includes('performance')) return mockReplies.sales;

  return mockReplies.default;
}
export default function ChatDemo(){ const [messages,setMessages]=useState(initial); const [value,setValue]=useState(''); const send=(text=value)=>{if(!text.trim())return;setMessages(m=>[...m,{from:'user',text},{from:'bot',text:replyFor(text)}]);setValue('');}; return <div className="chat-window"><div className="chat-head"><div className="bot-avatar"><Bot size={18}/></div><div><b>Jordan AI Data Assistant</b><small><i/>Analyzing your business data</small></div><Sparkles size={18}/></div><div className="messages">{messages.map((m,i)=><div className={'message '+m.from} key={i}>{m.from==='bot'&&<Bot size={16}/>}<p>{m.text}</p></div>)}</div><div className="prompts"><button onClick={()=>send('Which products should I reorder?')}>Which products should I reorder?</button><button onClick={()=>send('Who are my high-value customers?')}>Who are my high-value customers?</button></div><form className="chat-input" onSubmit={e=>{e.preventDefault();send();}}><input value={value} onChange={e=>setValue(e.target.value)} placeholder="Ask about your business..."/><button aria-label="Send"><ArrowUp size={18}/></button></form></div>;
}
