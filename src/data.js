const secciones = {
  inicio: 'inicio',
  descripcion: 'descripcion',
  fotos: 'fotos',
  reservar: 'reservar',
  contacto: 'contacto',
}

const frases = {
  frase1: {
    texto: 'Disfruta de un ambiente cómodo y placentero',
    fotoUrl: 'src/assets/imagen/terraza.jpg',
    altFoto: 'Foto de la terraza',
  },
  frase2: {
    texto: 'Aprecia las maravillosas vistas del paisaje urbano',
    fotoUrl: 'src/assets/imagen/mirador.jpg',
    altFoto: 'Foto del mirador',
  },
  frase3: {
    texto: 'Deléitate con nuestras comidas al más puro estilo cubano',
    fotoUrl: 'src/assets/imagen/desayuno.jpg',
    altFoto: 'Foto del desayuno',
  },
  frase4: {
    texto: 'Recréate en las maravillosas playas cerca de nuestro hostal',
    fotoUrl: 'src/assets/imagen/playa-flamencos-cayo.jpg',
    altFoto: 'Foto de la playa',
  },
}

const descripcion = {
  titulo: 'Hostal Alicia',
  slogan: 'Más que un hostal, un hogar',
  descripcion: [
    `Nuestra casa se encuentra ubicada en una de las calles principales de la ciudad de Morón, en
    la provincia de Ciego de Ávila, Cuba. Perteneciente al casco histórico, construida en 1914, conserva su estructura
    exterior a pesar de haber sido remodelada.`,
    `Todo el interior es moderno. Contamos con cuatro habitaciones (ventiladas y climatizadas) en la primera planta. 
    Además una amplia terraza donde puede degustar un delicioso desayuno, una rica cena tradicional o simplemente 
    disfrutar de buena música cubana. Más arriba pueden encontrar una azotea con columpio que permite visualizar 
    parte de la zona urbana de la ciudad.`,
    `Como puntos de referencias, se encuentra a 50mtrs La Casa de la Trova, a 25mtrs el Restaurante La Fuente. 
    Además, en la misma esquina contamoscon un centro comercial y un punto de venta de bebidas, refrescos y otros 
    comestibles.`,
    `Ofertamos algunos platos de la cocina internacional pero tratamos de priorizar la cocina local con platos 
    especiales de la casa.`,
  ],
}

const rooms = {
  hab1: [
    'src/assets/imagen/habitacion1-1.jpg',
    'src/assets/imagen/habitacion1-3.jpg',
    'src/assets/imagen/habitacion1-4.jpg',
    'src/assets/imagen/habitacion1-5.jpg',
  ],
  hab2: [
    'src/assets/imagen/Habitación2-1.jpg',
    'src/assets/imagen/Habitación2-2.jpg',
    'src/assets/imagen/Habitación2-3.jpg',
  ],
  hab3: [
    'src/assets/imagen/Habitacion3-1.jpg',
    'src/assets/imagen/Habitacion3-2.jpg',
    'src/assets/imagen/Habitacion3-3.jpg',
    'src/assets/imagen/Habitacion3-4.jpg',
  ],
  hab4: [
    'src/assets/imagen/Habitacion4-1.jpg',
    'src/assets/imagen/Habitacion4-2.jpg',
    'src/assets/imagen/Habitacion4-3.jpg',
  ],
  otros: [
    'src/assets/imagen/sala.jpg',
    'src/assets/imagen/saleta.jpg',
    'src/assets/imagen/saleta1.jpg',
    'src/assets/imagen/cocina1.jpg',
    'src/assets/imagen/cocina2.jpg',
    'src/assets/imagen/otros1.jpg',
    'src/assets/imagen/otros2.jpg',
    'src/assets/imagen/terraza.jpg',
    'src/assets/imagen/terraza1.jpg',
    'src/assets/imagen/terraza2.jpg',
    'src/assets/imagen/mirador.jpg',
  ],
}

const enlacesContacto = {
  whatsapp: {
    link: 'https://wa.me/+5353276404?text=Hola%20Hostal%20Alicia,%20me%20interesa%20hacer%20una%20reserva',
    icon: 'https://img.icons8.com/color/48/whatsapp--v1.png',
  },
  email: {
    link: 'mailto:hostalalicia2009@gmail.com',
    icon: 'https://img.icons8.com/ios-glyphs/60/email.png',
  },
  tripAdvisor: {
    link: 'https://www.tripadvisor.es/Hotel_Review-g666614-d2721188-Reviews-Hostal_Alicia-Moron_Ciego_de_Avila_Province_Cuba.html',
    icon: 'https://img.icons8.com/color/48/tripadvisor.png',
  },
  airbnb: {
    link1:
      'https://www.airbnb.es/rooms/20694347?adults=2&category_tag=Tag%3A8678&enable_m3_private_room=true&photo_id=365682188&search_mode=regular_search&check_in=2024-12-07&check_out=2024-12-08&source_impression_id=p3_1733138465_P3DSRpVYbQq4H1zE&previous_page_section_name=1000&federated_search_id=fec662b9-6883-447a-8634-22b78f7d7258&guests=1',
    link2:
      'https://www.airbnb.es/rooms/21735587?adults=2&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=408717549&search_mode=regular_search&check_in=2025-01-02&check_out=2025-01-07&source_impression_id=p3_1733138506_P3HYI_5_wIx6y2OZ&previous_page_section_name=1000&federated_search_id=1d2239dc-64a3-4b42-ac5d-5615b6d543ec',
    link3:
      'https://www.airbnb.es/rooms/21735857?adults=2&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-12-02&check_out=2024-12-07&source_impression_id=p3_1733138523_P3D71JXbjk5sN18V&previous_page_section_name=1000&federated_search_id=cce4dbfc-56cb-4db2-b62e-e931f42fade2',
    link4:
      'https://www.airbnb.es/rooms/21735982?adults=2&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=408726985&search_mode=regular_search&check_in=2024-12-02&check_out=2024-12-07&source_impression_id=p3_1733138506_P36Mh5w7pSV0Iz0Q&previous_page_section_name=1000&federated_search_id=1d2239dc-64a3-4b42-ac5d-5615b6d543ec',
    icon: 'https://img.icons8.com/ios-filled/50/airbnb.png',
  },
}

export default { secciones, frases, descripcion, rooms, enlacesContacto }
