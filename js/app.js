new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        title: 'Casque Bluetooth',
        description: 'Casque sans fil de haute qualité avec son immersif.',
        price: '15 000',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224f93b?fit=crop&w=800&h=500'
      },
      {
        id: 2,
        title: 'Montre Intelligente',
        description: 'Montre connectée avec suivi de santé et notifications.',
        price: '25 000',
        image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=800&h=500'
      },
      {
        id: 3,
        title: 'Sac à Dos Stylé',
        description: 'Sac durable et tendance pour l’école ou le travail.',
        price: '12 000',
        image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?fit=crop&w=800&h=500'
      }
    ]
  }
});