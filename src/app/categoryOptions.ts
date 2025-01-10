// src/categoryOptions.ts

export type Option = {
  name: string;
  price: string;
  description: string;
  image: string;
};

  export type CategoryOptions = {
    monitors: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
    laptops: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
    tablets: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
    graphicsCards: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
    smartphones: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
    headphones: {
      budget: Option;
      medium: Option;
      expensive: Option;
    };
  };
  
  export const categoryOptions: CategoryOptions = {
    monitors: {
      budget: {
        name: 'Budget Monitor',
        price: '$120',
        description:
          'A 24-inch Full HD monitor with decent color accuracy, ideal for everyday tasks like browsing and office work.',
        image: 'https://example.com/images/budget-monitor.jpg',
      },
      medium: {
        name: 'Mid-range Monitor',
        price: '$350',
        description:
          'A 27-inch 4K monitor with good color reproduction, perfect for professionals and casual gaming.',
        image: 'https://example.com/images/mid-range-monitor.jpg',
      },
      expensive: {
        name: 'High-end Monitor',
        price: '$800',
        description:
          'A 32-inch 144Hz 4K monitor with excellent color accuracy and HDR support, designed for gamers and content creators.',
        image: 'https://example.com/images/high-end-monitor.jpg',
      },
    },
    laptops: {
      budget: {
        name: 'Budget Laptop',
        price: '$400',
        description:
          'A lightweight 15-inch laptop with an Intel Core i3 processor, 8GB RAM, and 256GB SSD. Ideal for students and light productivity tasks.',
        image: 'https://example.com/images/budget-laptop.jpg',
      },
      medium: {
        name: 'Mid-range Laptop',
        price: '$900',
        description:
          'A 14-inch laptop with an Intel Core i5 processor, 16GB RAM, and 512GB SSD. Perfect for professionals working on everyday tasks and light gaming.',
        image: 'https://example.com/images/mid-range-laptop.jpg',
      },
      expensive: {
        name: 'High-end Laptop',
        price: '$1,800',
        description:
          'A 16-inch laptop with an Intel Core i7 processor, 32GB RAM, and 1TB SSD. Great for power users, video editing, and gaming.',
        image: 'https://example.com/images/high-end-laptop.jpg',
      },
    },
    tablets: {
      budget: {
        name: 'Budget Tablet',
        price: '$150',
        description:
          'An 8-inch tablet with 3GB RAM and 32GB storage. Perfect for casual browsing, reading, and light media consumption.',
        image: 'https://example.com/images/budget-tablet.jpg',
      },
      medium: {
        name: 'Mid-range Tablet',
        price: '$400',
        description:
          'A 10-inch tablet with 4GB RAM and 128GB storage, featuring a crisp display and good performance for streaming and productivity.',
        image: 'https://example.com/images/mid-range-tablet.jpg',
      },
      expensive: {
        name: 'Premium Tablet',
        price: '$900',
        description:
          'An 11-inch tablet with 6GB RAM and 256GB storage. Ideal for professionals needing a portable device for work and entertainment.',
        image: 'https://example.com/images/premium-tablet.jpg',
      },
    },
    graphicsCards: {
      budget: {
        name: 'Budget Graphics Card',
        price: '$150',
        description:
          'An entry-level GPU with 4GB VRAM, suitable for casual gaming and multimedia tasks.',
        image: 'https://example.com/images/budget-gpu.jpg',
      },
      medium: {
        name: 'Mid-range Graphics Card',
        price: '$350',
        description:
          'A solid GPU with 8GB VRAM, ideal for 1080p gaming and content creation at moderate settings.',
        image: 'https://example.com/images/mid-range-gpu.jpg',
      },
      expensive: {
        name: 'High-end Graphics Card',
        price: '$1,200',
        description:
          'A powerful GPU with 16GB VRAM, perfect for 4K gaming, professional video editing, and 3D rendering.',
        image: 'https://example.com/images/high-end-gpu.jpg',
      },
    },
    smartphones: {
      budget: {
        name: 'Budget Smartphone',
        price: '$150',
        description:
          'A 6.5-inch smartphone with 3GB RAM, 64GB storage, and a basic camera. Great for casual users and those on a tight budget.',
        image: 'https://example.com/images/budget-smartphone.jpg',
      },
      medium: {
        name: 'Mid-range Smartphone',
        price: '$450',
        description:
          'A 6.7-inch smartphone with 6GB RAM, 128GB storage, and a powerful camera setup. Perfect for everyday users and photography enthusiasts.',
        image: 'https://example.com/images/mid-range-smartphone.jpg',
      },
      expensive: {
        name: 'Flagship Smartphone',
        price: '$1,200',
        description:
          'A 6.9-inch smartphone with 12GB RAM, 256GB storage, and a premium camera system. Ideal for power users and mobile photography experts.',
        image: 'https://example.com/images/flagship-smartphone.jpg',
      },
    },
    headphones: {
      budget: {
        name: 'Skullcandy Hesh® Evo',
        price: '$69.99',
        description:
          'Affordable wired headphones with decent sound quality, great for casual listening and commuting.',
        image: 'https://www.skullcandy.eu/cdn/shop/files/Hesh_evo_buy_box_black_1_bdd2a69f-1656-4e16-82ee-1e9e03bad74a.png',
      },
      medium: {
        name: 'Sony ULT WEAR',
        price: '$119.99',
        description:
          'Wireless over-ear headphones with active noise cancellation and balanced sound, suitable for long listening sessions and travel.',
        image: 'https://m.media-amazon.com/images/I/618DgisaOcL._AC_SX679_.jpg',
      },
      expensive: {
        name: 'Bose QuietComfort SC',
        price: '$349.99',
        description:
          'High-end over-ear headphones with superb sound quality, top-notch noise cancellation, and premium materials. Perfect for audiophiles and professionals.',
        image: 'https://m.media-amazon.com/images/I/51aw022aEaL._AC_SX679_.jpg',
      },
    },
  };
  