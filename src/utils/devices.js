const devices = {
    models: {
        "iPhone": [
            ["6", "iPhone 6"],
            ["6 Plus", "iPhone 6 Plus"],
            ["6S", "iPhone 6S"],
            ["6S Plus", "iPhone 6S Plus"],
            ["7", "iPhone 7"],
            ["7 Plus", "iPhone 7 Plus"],
            ["8", "iPhone 8"],
            ["8 Plus", "iPhone 8 Plus"],
            ["X", "iPhone X"],
            ["XS", "iPhone XS"],
            ["XR", "iPhone XR"],
            ["XS MAX", "iPhone XS MAX"],
            ["11", "iPhone 11"],
            ["11 PRO", "iPhone 11 PRO"],
            ["11 PRO MAX", "iPhone 11 PRO MAX"],
            ["12", "iPhone 12"],
            ["12 MINI", "iPhone 12 MINI"],
            ["12 PRO", "iPhone 12 PRO"],
            ["12 PRO MAX", "iPhone 12 PRO MAX"],
            ["13", "iPhone 13"],
            ["13 MINI", "iPhone 13 MINI"],
            ["13 PRO", "iPhone 13 PRO"],
            ["13 PRO MAX", "iPhone 13 PRO MAX"],
        ],
        "iPad": [
            ["Mini (A1432 A1454 A1455)", "iPad Mini"],
            ["Mini 2 (A1489 A1490 A1491)", "iPad Mini 2"],
            ["Mini 3 (A1599 A1600)", "iPad Mini 3"],
            ["Mini 4 (A1538 A1550)", "iPad Mini 4"],
            ["Pro 9.7 (A1673 A1674 A1675)", "iPad Pro 9.7"],
            ["Pro 10.5 (A1701 A1709)", "iPad Pro 10.5"],
            ["Air 1 (A1474 A1475 A1476)", "iPad Air 1"],
            ["Air 2 (A1566 A1567)", "iPad Air 2"],
            ["Air 3 (A2123 A2152 A2153)", "iPad Air 3"],
            ["Air 4 (A2072 A2316 A2324 A2325)", "iPad Air 4"],
            ["Mini 5 (A2124 A2126 A2133)", "iPad Mini 5"],
            ["Pro 11-1 (A1934 A1980 A2013)", "iPad Pro 11 1st Gen"],
            ["Pro 11-2 (A2068 A2228 A2230)", "iPad Pro 11 2nd Gen"],
            ["Pro 12.9-1 (A1584 A1652)", "iPad Pro 12.9 1st Gen"],
            ["Pro 12.9-2 (A1670 A1671)", "iPad Pro 12.9 2nd Gen"],
            ["Pro 12.9-3 (A1876 A1895 A2014)", "iPad Pro 12.9 3rd Gen"],
            ["Pro 12.9-4 (A2069 A2229 A2232)", "iPad Pro 12.9 4th Gen"],
            ["1 (A1219 A1337)", "iPad 1"],
            ["2 (A1395 A1396 A1397)", "iPad 2"],
            ["3 (A1403 A1416 A1430)", "iPad 3"],
            ["4 (A1458 A1459 A1460)", "iPad 4"],
            ["5 (A1822 A1823)", "iPad 5"],
            ["6 (A1893 A1954)", "iPad 6"],
            ["7 (A2197 A2198 A2200)", "iPad 7"],
            ["8 (A2270 A2428 A2429 A2430)", "iPad 8"],
        ],
        "Apple Watch": [
            ["1 38mm", "iWatch 1 38mm"],
            ["1 42mm", "iWatch 1 42mm"],
            ["2 GPS 38mm", "iWatch 2 GPS 38mm"],
            ["2 GPS 42mm", "iWatch 2 GPS 42mm"],
            ["2 GPS+Cellular 38mm", "iWatch 2 LTE 38mm"],
            ["2 GPS+Cellular 42mm", "iWatch 2 LTE 42mm"],
            ["3 GPS 38mm", "iWatch 3 GPS 38mm"],
            ["3 GPS 42mm", "iWatch 3 GPS 42mm"],
            ["3 GPS+Cellular 38mm", "iWatch 3 LTE 38mm"],
            ["3 GPS+Cellular 42mm", "iWatch 3 LTE 42mm"],
            ["4 40mm", "iWatch 4 40mm"],
            ["4 44mm", "iWatch 4 44mm"],
            ["5 40mm", "iWatch 5 40mm"],
            ["5 44mm", "iWatch 5 44mm"],
            ["6 40mm", "iWatch 6 40mm"],
            ["6 44mm", "iWatch 6 44mm"],
            ["SE 40mm", "iWatch SE 40mm"],
            ["SE 44mm", "iWatch SE 44mm"],
        ],
        "Samsung Phone": [
            ["S21 5G", "Samsung S21 5G"],
            ["S21 Ultra", "Samsung S21 Ultra"],
            ["S21 Plus", "Samsung S21 Plus"],
            ["Note 20 Ultra", "Samsung Note 20 Ultra"],
            ["Note 20", "Samsung Note 20"],
            ["Note 10 Plus", "Samsung Note 10 Plus"],
            ["Note 10", "Samsung Note 10"],
            ["Note 9", "Samsung Note9"],
            ["Note 8", "Samsung Note 8"],
            ["Note 7", "Samsung Note 7"],
            ["Note 6", "Samsung Note 6"],
            ["Note 5", "Samsung Note 5"],
            ["Note 4", "Samsung Note 4"],
            ["Note 3", "Samsung Note 3"],
            ["S20 FE", "Samsung S20 FE"],
            ["S20 Ultra", "Samsung S20 Ultra"],
            ["S20 Plus", "Samsung S20 Plus"],
            ["S20 5G", "Samsung S20 5G"],
            ["S10 Plus", "Samsung S10 Plus"],
            ["S10 5G", "Samsung S10 5G"],
            ["S10e", "Samsung S10e"],
            ["S10", "Samsung S10"],
            ["S9 Plus", "Samsung S9 Plus"],
            ["S9", "Samsung S9"],
            ["S8 Active", "Samsung S8 Active"],
            ["S8 Plus", "Samsung S8 Plus"],
            ["S8", "Samsung S8"],
            ["S7 Active", "Samsung S7 Active"],
            ["S7 Edge", "Samsung S7 Edge"],
            ["S7", "Samsung S7"],
            ["S6e", "Samsung S6e"],
            ["S6", "Samsung S6"],
            ["S5", "Samsung S5"],
            ["S4", "Samsung S4"],
            ["S3", "Samsung S3"],
        ],
        "Samsung Tablet": [
            ["Tab A 10.1 (T510)", "Samsung Tab A 10.1 (T510)"],
            ["Tab S7 Plus 12.4 (T970)", "Samsung Tab S7 Plus (T970)"],
            ["Tab S7 11 (T870)", "Samsung Tab S7 (T870)"],
            ["Tab S6 10.5 (T860)", "Samsung Tab S6 10.5 (T860)"],
            ["Tab S5e 10.5 (T720)", "Samsung Tab S5e 10.5 (T720)"],
            ["Tab S4 10.5 (T830)", "Samsung Tab S4 10.5 (T830)"],
            ["Tab Pro 10.1 (T520)", "Samsung Tab Pro 10.1 (T520)"],
            ["Tab A 10.5 (T590)", "Samsung Tab A 10.5 (T590)"],
            ["Tab A 8.0 (T295)", "Samsung Tab A 8.0 (T295)"],
            ["Tab A 8.0 (T290)", "Samsung Tab A 8.0 (T290)"],
            ["Other", "Samsung Other Tablet"],
        ]
    },
    colors: [
        "white",
        "silver",
        "gray",
        "black",
        "red",
        "green",
        "blue",
        "rose gold",
        "pink",
        "purple",
        "gold",
        "yellow",
        "orange",
        "bronze",
        "other"
    ]
};


export default devices;