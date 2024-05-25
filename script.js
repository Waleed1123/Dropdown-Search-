// var a = {
//     mobiles: {
//         Samsung: {
//             SamsungA10: {
//                 name: "Samsung A10",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "13",
//                 price: "22,000 PKR"
//             },
//             SamsungA20: {
//                 name: "Samsung A20",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "18",
//                 price: "28,000"
//             },
//             SamsungA30: {
//                 name: "Samsung A30",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "25",
//                 price: "29,000"
//             }
//         },
//         IPhone: {
//             IPhone11: {
//                 name: "IPhone11",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "12",
//                 price: "100,000"
//             },
//             IPhone12: {
//                 name: "IPhone12",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "12",
//                 price: "150,000"
//             },
//             IPhone13: {
//                 name: "IPhone13",
//                 ram: "6gb",
//                 rom: "128gb",
//                 camera: "24",
//                 price: "200,000"
//             }
//         },
//         Oppo: {
//             OppoV20: {
//                 name: "OppoV20",
//                 ram: "8gb",
//                 rom: "128gb",
//                 camera: "64",
//                 price: "54,999"
//             },
//             OppoF19: {
//                 name: "OppoF19",
//                 ram: "6gb",
//                 rom: "128gb",
//                 camera: "48",
//                 price: "36,999"
//             },
//             OppoF11: {
//                 name: "OppoF11",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "48",
//                 price: "35,999"
//             }
//         },
//         Vivo: {
//             VivoY20: {
//                 name: "VivoY20",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "13",
//                 price: "26,999"
//             },
//             VivoY21: {
//                 name: "VivoY21",
//                 ram: "4gb",
//                 rom: "64gb",
//                 camera: "13",
//                 price: "43,999"
//             },
//             VivoY55: {
//                 name: "VivoY55",
//                 ram: "8gb",
//                 rom: "128gb",
//                 camera: "50",
//                 price: "64,999"
//             }
//         }
//     }
// }
// // console.log(a.mobiles);

// for (let i = 0; i < a.mobiles; i++) {
//      console.log(a.mobiles);
// }
const mobiles = {
    Samsung: {
        SamsungA10: {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "22,000 PKR"
        },
        SamsungA20: {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18",
            price: "28,000"
        },
        SamsungA30: {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25",
            price: "29,000"
        }
    },
    IPhone: {
        IPhone11: {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "100,000"
        },
        IPhone12: {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "150,000"
        },
        IPhone13: {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24",
            price: "200,000"
        }
    },
    Oppo: {
        OppoV20: {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64",
            price: "54,999"
        },
        OppoF19: {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48",
            price: "36,999"
        },
        OppoF11: {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48",
            price: "35,999"
        }
    },
    Vivo: {
        VivoY20: {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "26,999"
        },
        VivoY21: {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "43,999"
        },
        VivoY55: {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50",
            price: "64,999"
        }
    }
};

// Populate the brand dropdown
const brandDropdown = document.getElementById("brand");
const modelDropdown = document.getElementById("model");
const detailsDiv = document.getElementById("details");

const allBrands = Object.keys(mobiles);
for (let i = 0; i < allBrands.length; i++) {
    brandDropdown.innerHTML += `<option value="${allBrands[i]}">${allBrands[i]}</option>`;
}

function selectBrand() {
    const selectedBrand = brandDropdown.value;
    modelDropdown.innerHTML = '<option value="">Select Model</option>'; // Reset model dropdown
    detailsDiv.style.display = 'none'; // Hide details
    detailsDiv.innerHTML = ''; // Clear details

    if (selectedBrand) {
        modelDropdown.style.display = 'block';
        const allModels = Object.keys(mobiles[selectedBrand]);
        for (let i = 0; i < allModels.length; i++) {
            modelDropdown.innerHTML += `<option value="${allModels[i]}">${mobiles[selectedBrand][allModels[i]].name}</option>`;
        }
    } else {
        modelDropdown.style.display = 'none';
    }
}

function selectModel() {
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;

    if (selectedModel) {
        const mobile = mobiles[selectedBrand][selectedModel];
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = `
            <h3>${mobile.name}</h3>
            <p>RAM: ${mobile.ram}</p>
            <p>ROM: ${mobile.rom}</p>
            <p>Camera: ${mobile.camera} MP</p>
            <p>Price: ${mobile.price}</p>
        `;
    } else {
        detailsDiv.style.display = 'none';
        detailsDiv.innerHTML = '';
    }
}
