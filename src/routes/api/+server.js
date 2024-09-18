import { json } from '@sveltejs/kit';
const data = [
  {
    reloadTime: '60',
    Concurent_Views: '2',
    Title: 'GTA Epic 5',
    userId: '7246b02'
  },
  {
    reloadTime: '60',
    Concurent_Views: '2',
    Title: 'GTA 5',
    userId: '7246b02'
  },
  // {
  //   reloadTime: '60',
  //   Concurent_Views: '2',
  //   Title: 'GTA Vice city',
  //   userId: '7246b02'
  // },
];


export async function GET(event) {
	return json(data);
}
