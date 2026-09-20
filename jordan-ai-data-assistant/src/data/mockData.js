export const monthlySales = [
  { month: 'Jan', sales: 12400 }, { month: 'Feb', sales: 14800 }, { month: 'Mar', sales: 13600 },
  { month: 'Apr', sales: 16900 }, { month: 'May', sales: 15400 }, { month: 'Jun', sales: 18700 }
];

export const metrics = [
  { label: 'Total Revenue', value: 'JOD 95,420', change: '+8.5%', tone: 'blue' },
  { label: 'Total Sales', value: '1,284', change: '+12.4%', tone: 'purple' },
  { label: 'Customers', value: '846', change: '+5.2%', tone: 'cyan' },
  { label: 'Avg. Order Value', value: 'JOD 74.31', change: '+3.1%', tone: 'orange' }
];

export const products = [
  { name: 'Product A', category: 'Essentials', sales: 248, revenue: 'JOD 18,600', stock: 'In Stock', level: 'good' },
  { name: 'Product B', category: 'Accessories', sales: 186, revenue: 'JOD 14,880', stock: 'Low Stock', level: 'low' },
  { name: 'Product C', category: 'Essentials', sales: 153, revenue: 'JOD 12,240', stock: 'Low Stock', level: 'low' }
];

export const insights = [
  { type: 'Sales insight', title: 'Sales decreased by 12% compared with last month.', detail: 'Product X sales fell by 28%, with returning customer activity down 9%.', icon: 'trend' },
  { type: 'Inventory alert', title: 'Product X is expected to run out within 7 days.', detail: 'Reorder at least 60 units to maintain your recent sales velocity.', icon: 'box' },
  { type: 'Customer insight', title: '20% of customers generate 65% of your revenue.', detail: 'Create a retention offer for this high-value customer segment.', icon: 'users' },
  { type: 'Forecast', title: 'Expected sales growth next month: +8.5%.', detail: 'The forecast is based on your current sales trend and seasonality.', icon: 'spark' }
];

export const mockReplies = {
  sales: 'Sales decreased by 12% mainly because Product X sales dropped by 28%, while returning customer activity decreased by 9%. Consider a targeted offer for customers who have not returned this month.',
  forecast: 'The current sales trend points to +8.5% growth next month, supported by consistent demand and seasonality. The strongest gains are likely in Essentials and repeat-customer purchases.',
  reorder: 'Product B and Product C are currently below the recommended stock level based on recent sales velocity. Product X will need a reorder within 7 days.',
  customer: 'Your highest-value 20% of customers generate 65% of revenue. They tend to buy Essentials twice per month, so a loyalty reward could improve retention.',
  default: 'I found an opportunity in your current data: revenue is up 8.5% overall, but two items are low in stock. I can help you explore sales, customers, inventory, or forecasts.'
};
