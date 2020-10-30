const topCategories = [
  {
    id: 1,
    name: 'Business News'
  },
  {
    id: 2,
    name: 'Technology News'
  },
  {
    id: 3,
    name: 'Health News'
  },
  {
    id: 5,
    name: 'Entertainment'
  },
  {
    id: 6,
    name: 'Stocks'
  },
  {
    id: 7,
    name: 'Weather'
  },
  {
    id: 8,
    name: 'Tweets'
  },
  {
    id: 9,
    name: 'Office Days'
  },
  {
    id: 10,
    name: 'Currency'
  }
]

const navItems = [
  {
    id: 1,
    name: "Open Datasets",
  },
  {
    id: 2,
    name: "Statistical Rigor",
  },
  {
    id: 3,
    name: "Pricing",
  },
  {
    id: 4,
    name: "Consulting",
  },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  centerPadding: "60px",
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export {
  topCategories,
  navItems,
  sliderSettings
}