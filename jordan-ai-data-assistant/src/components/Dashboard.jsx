import { useMemo, useState } from 'react';
import { ArrowUpRight, Bell, Box, ChevronDown, CircleDollarSign, LayoutDashboard, Package, ShoppingBag, Users } from 'lucide-react';
import { metrics, monthlySales, products } from '../data/mockData';

const IconMap = [CircleDollarSign, ShoppingBag, Users, ArrowUpRight];
export default function Dashboard() {
  const [range, setRange] = useState('Last 6 months');
  const max = useMemo(() => Math.max(...monthlySales.map((m) => m.sales)), []);
  return <section className="demo-shell" id="demo">
    <div className="demo-sidebar"><div className="brand-mark small">A</div><LayoutDashboard className="active"/><BarChartIcon/><Users/><Package/><div className="sidebar-bottom"><Bell/><div className="avatar">MO</div></div></div>
    <div className="demo-content">
      <div className="demo-top"><div><p className="eyebrow">OVERVIEW</p><h3>Business performance</h3><p className="muted">Your business at a glance</p></div><button className="range">{range}<ChevronDown size={15}/></button></div>
      <div className="metric-grid">{metrics.map((item, i) => { const I = IconMap[i]; return <article className={'metric-card ' + item.tone} key={item.label}><span className="metric-icon"><I size={18}/></span><p>{item.label}</p><strong>{item.value}</strong><small><ArrowUpRight size={13}/>{item.change} <em>vs prev.</em></small></article>; })}</div>
      <div className="dash-grid"><article className="chart-card"><div className="card-head"><div><h4>Revenue & sales</h4><p>Monthly performance</p></div><span className="live-dot">Live data</span></div><div className="chart">{monthlySales.map((item) => <div className="bar-wrap" key={item.month}><span className="tip">JOD {item.sales.toLocaleString()}</span><div className="bar" style={{ height: `${Math.round(item.sales / max * 100)}%` }}></div><small>{item.month}</small></div>)}</div></article>
      <article className="inventory-card"><div className="card-head"><div><h4>Inventory health</h4><p>42 active products</p></div><Box size={20}/></div><div className="donut"><div><strong>82%</strong><span>healthy</span></div></div><div className="legend"><span><i className="good"/>In stock <b>31</b></span><span><i className="low"/>Low stock <b>8</b></span><span><i className="out"/>Out of stock <b>3</b></span></div></article></div>
      <article className="products-card"><div className="card-head"><div><h4>Top products</h4><p>Best selling this month</p></div><button className="text-button">View all</button></div>{products.map((p, i) => <div className="product-row" key={p.name}><span className="rank">0{i + 1}</span><div className="product-name"><b>{p.name}</b><small>{p.category}</small></div><div><b>{p.sales}</b><small>units sold</small></div><div><b>{p.revenue}</b><small>revenue</small></div><span className={'status ' + p.level}>{p.stock}</span></div>)}</article>
    </div>
  </section>;
}
function BarChartIcon(){ return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 16v-5M12 16V7M17 16v-9"/></svg>; }
