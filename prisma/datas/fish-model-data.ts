import { IFishModel } from "../interfaces/fish-model";

export const fishModelDatas: IFishModel[] = [
    {
        code: "Ikan_Bawal_Hitam",
        name: "Bawal Hitam",
        scientificName: "Trachinotus blochii",
        urlImg: "https://example.com/bawal-hitam.jpg",
        otherNames: ["Bawal Bloch", "Black Pomfret"],
        description: ["Ikan Bawal Hitam adalah salah satu ikan laut yang populer di Indonesia.", "Warna tubuhnya kehitaman dan memiliki duri tajam di bagian atas sirip punggung."],
        productRecipe: [
            {
                name: "Panggang Bawal Hitam",
                description: "Resep panggang bawal hitam yang lezat.",
                material: ["Bawal Hitam segar", "Bumbu panggang", "Lemon"],
                steps: ["Siapkan bawal hitam yang sudah dibersihkan.", "Olesi bawal hitam dengan bumbu panggang dan perasan lemon.", "Panggang bawal hitam hingga matang."]
            }
        ],
        location: [
            {
                name: "Perairan Indonesia",
                description: "Bawal hitam dapat ditemui di perairan Indonesia yang hangat."
            }
        ]
    },
    {
        code: "Ikan_Cipa_Cipa",
        name: "Cipa-Cipa",
        scientificName: "Cheilinus undulatus",
        urlImg: "https://example.com/cipa-cipa.jpg",
        otherNames: ["Napoleon Wrasse", "Maori Wrasse"],
        description: ["Ikan Cipa-Cipa memiliki tubuh yang besar dan warna-warni cerah.", "Mereka biasanya ditemukan di terumbu karang yang dalam."],
        productRecipe: [
            {
                name: "Gulai Cipa-Cipa",
                description: "Resep gulai cipa-cipa yang lezat.",
                material: ["Daging cipa-cipa", "Bumbu gulai", "Santan"],
                steps: ["Potong daging cipa-cipa menjadi potongan kecil.", "Masak bumbu gulai dengan santan hingga harum.", "Masukkan potongan daging cipa-cipa dan masak hingga matang."]
            }
        ],
        location: [
            {
                name: "Lautan Pasifik",
                description: "Cipa-cipa biasanya ditemukan di kawasan terumbu karang di sekitar Lautan Pasifik."
            }
        ]
    },
    {
        code: "Ikan_Kembung",
        name: "Kembung",
        scientificName: "Rastrelliger brachysoma",
        urlImg: "https://example.com/kembung.jpg",
        otherNames: ["Indian mackerel", "Short mackerel"],
        description: ["Ikan Kembung memiliki tubuh yang silindris dan sisik kecil.", "Mereka adalah ikan pelagis yang biasanya ditemukan di perairan hangat dan tropis."],
        productRecipe: [
            {
                name: "Sambal Kembung",
                description: "Resep sambal kembung yang pedas dan lezat.",
                material: ["Ikan kembung segar", "Bumbu sambal", "Tomat", "Cabe"],
                steps: ["Potong ikan kembung menjadi bagian-bagian kecil.", "Tumis bumbu sambal hingga harum.", "Masukkan potongan ikan kembung, tomat, dan cabe. Masak hingga matang."]
            }
        ],
        location: [
            {
                name: "Perairan Tropis",
                description: "Kembung biasanya ditemukan di perairan tropis di sekitar wilayah Asia Tenggara."
            }
        ]
    },
    {
        code: "Ikan_Kenyar",
        name: "Kenyar",
        scientificName: "Scomberomorus commerson",
        urlImg: "https://example.com/kenyar.jpg",
        otherNames: ["Narrow-barred Spanish mackerel", "Baji"],
        description: ["Ikan Kenyar memiliki tubuh yang ramping dengan garis-garis vertikal yang mencolok.", "Mereka adalah ikan pemangsa yang agresif dan biasanya ditemukan di perairan hangat dan tropis."],
        productRecipe: [
            {
                name: "Pindang Kenyar",
                description: "Resep pindang kenyar yang segar dan lezat.",
                material: ["Ikan kenyar segar", "Bumbu pindang", "Asam", "Daun kemangi"],
                steps: ["Rebus bumbu pindang dengan air hingga mendidih.", "Masukkan potongan ikan kenyar dan masak hingga matang.", "Tambahkan asam dan daun kemangi untuk memberi rasa segar."]
            }
        ],
        location: [
            {
                name: "Perairan Hangat",
                description: "Kenyar sering ditemukan di perairan hangat di sekitar wilayah Asia Tenggara dan Australia."
            }
        ]
    },
    {
        code: "Ikan_Kuwe",
        name: "Kuwe",
        scientificName: "Lutjanus sebae",
        urlImg: "https://example.com/kuwe.jpg",
        otherNames: ["Red Snapper", "Ikan Merah"],
        description: ["Ikan Kuwe adalah ikan yang berasal dari keluarga Lutjanidae dan memiliki warna merah cerah di bagian atas tubuhnya.", "Mereka ditemukan di berbagai jenis habitat seperti terumbu karang, dasar laut, dan perairan terbuka."],
        productRecipe: [
            {
                name: "Goreng Kuwe",
                description: "Resep goreng kuwe yang renyah di luar, juicy di dalam.",
                material: ["Ikan kuwe segar", "Tepung bumbu", "Minyak goreng"],
                steps: ["Lumuri ikan kuwe dengan tepung bumbu hingga merata.", "Goreng ikan kuwe dalam minyak panas hingga kecokelatan dan matang sempurna.", "Angkat dan tiriskan sebentar sebelum disajikan."]
            }
        ],
        location: [
            {
                name: "Perairan Tropis",
                description: "Kuwe biasanya ditemukan di perairan tropis di sekitar Samudra Hindia dan Samudra Pasifik bagian barat."
            }
        ]
    },
    {
        code: "Ikan_Salem",
        name: "Salem",
        scientificName: "Lutjanus campechanus",
        urlImg: "https://example.com/salem.jpg",
        otherNames: ["Red Snapper", "Ikan Merah"],
        description: ["Ikan Salem adalah ikan laut yang populer di dunia kuliner.", "Mereka memiliki daging putih yang lembut dan rasanya gurih."],
        productRecipe: [
            {
                name: "Panggang Salem",
                description: "Resep panggang salem yang lezat.",
                material: ["Ikan salem segar", "Bumbu panggang", "Lemon"],
                steps: ["Bersihkan ikan salem dan lumuri dengan bumbu panggang dan perasan lemon.", "Panggang ikan salem hingga matang dan warnanya kecokelatan.", "Sajikan dengan irisan lemon di atasnya."]
            }
        ],
        location: [
            {
                name: "Perairan Hangat",
                description: "Salem biasanya ditemukan di perairan hangat di sekitar Amerika Utara dan Amerika Tengah."
            }
        ]
    },
    {
        code: "Ikan_Sebelah",
        name: "Sebelah",
        scientificName: "Monodactylus sebae",
        urlImg: "https://example.com/sebelah.jpg",
        otherNames: ["Silver Moony", "Sebelah"],
        description: ["Ikan Sebelah memiliki tubuh yang pipih dan cenderung melengkung seperti bulan sabit.", "Mereka biasanya hidup di perairan payau dan merupakan ikan yang populer dalam akuarium."],
        productRecipe: [
            {
                name: "Goreng Sebelah",
                description: "Resep goreng sebelah yang renyah di luar, lembut di dalam.",
                material: ["Ikan sebelah segar", "Tepung bumbu", "Minyak goreng"],
                steps: ["Lumuri ikan sebelah dengan tepung bumbu hingga merata.", "Goreng ikan sebelah dalam minyak panas hingga kecokelatan dan matang sempurna.", "Angkat dan tiriskan sebentar sebelum disajikan."]
            }
        ],
        location: [
            {
                name: "Perairan Payau",
                description: "Sebelah biasanya ditemukan di perairan payau di sekitar pesisir dan muara sungai."
            }
        ]
    },
    {
        code: "Ikan_Selar_Bulat",
        name: "Selar Bulat",
        scientificName: "Decapterus macrosoma",
        urlImg: "https://example.com/selar-bulat.jpg",
        otherNames: ["Round Scad", "Selar"],
        description: ["Ikan Selar Bulat memiliki tubuh yang oval dan sisik kecil yang rapat.", "Mereka biasanya ditemukan di perairan hangat dan tropis."],
        productRecipe: [
            {
                name: "Sambal Selar Bulat",
                description: "Resep sambal selar bulat yang pedas dan segar.",
                material: ["Ikan selar bulat segar", "Bumbu sambal", "Tomat", "Cabe"],
                steps: ["Potong ikan selar bulat menjadi bagian-bagian kecil.", "Tumis bumbu sambal hingga harum.", "Masukkan potongan ikan selar bulat, tomat, dan cabe. Masak hingga matang."]
            }
        ],
        location: [
            {
                name: "Perairan Tropis",
                description: "Selar bulat biasanya ditemukan di perairan tropis di sekitar wilayah Asia Tenggara."
            }
        ]
    },
    {
        code: "Ikan_Tenggiri_Papan",
        name: "Tenggiri Papan",
        scientificName: "Scomberomorus guttatus",
        urlImg: "https://example.com/tenggiri-papan.jpg",
        otherNames: ["Indo-Pacific King Mackerel", "Tenggiri"],
        description: ["Ikan Tenggiri Papan memiliki tubuh yang ramping dan sisik yang kecil.", "Mereka adalah ikan pemangsa yang aktif dan biasanya ditemukan di perairan hangat dan tropis."],
        productRecipe: [
            {
                name: "Goreng Tenggiri Papan",
                description: "Resep goreng tenggiri papan yang gurih dan lezat.",
                material: ["Ikan tenggiri papan segar", "Tepung bumbu", "Minyak goreng"],
                steps: ["Lumuri ikan tenggiri papan dengan tepung bumbu hingga merata.", "Goreng ikan tenggiri papan dalam minyak panas hingga kecokelatan dan matang sempurna.", "Angkat dan tiriskan sebentar sebelum disajikan."]
            }
        ],
        location: [
            {
                name: "Perairan Tropis",
                description: "Tenggiri papan biasanya ditemukan di perairan tropis di sekitar Samudra Hindia dan Samudra Pasifik."
            }
        ]
    },
    {
        code: "Ikan_Tuna",
        name: "Tuna",
        scientificName: "Thunnini",
        urlImg: "https://example.com/tuna.jpg",
        otherNames: ["Tongkol", "Cakalang"],
        description: ["Ikan Tuna adalah ikan laut yang besar dan aktif secara migrasi.", "Mereka adalah ikan pemangsa yang kuat dan cepat."],
        productRecipe: [
            {
                name: "Steak Tuna",
                description: "Resep steak tuna yang juicy dan lezat.",
                material: ["Daging tuna segar", "Bumbu steak", "Minyak zaitun"],
                steps: ["Potong daging tuna menjadi steak.", "Marinasi dengan bumbu steak dan minyak zaitun.", "Panggang atau bakar steak tuna hingga matang sesuai selera."]
            }
        ],
        location: [
            {
                name: "Perairan Hangat dan Tropis",
                description: "Tuna biasanya ditemukan di perairan hangat dan tropis di seluruh dunia, termasuk di Samudra Atlantik, Samudra Pasifik, dan Samudra Hindia."
            }
        ]
    }
];

