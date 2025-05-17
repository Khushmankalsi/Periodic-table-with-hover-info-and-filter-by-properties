    const elements = [
      { number: 1, symbol: "H", group: 1, period: 1, block: "s-block" },
      { number: 2, symbol: "He", group: 18, period: 1, block: "s-block" },
      
      { number: 3, symbol: "Li", group: 1, period: 2, block: "s-block" },
      { number: 4, symbol: "Be", group: 2, period: 2, block: "s-block" },
      { number: 5, symbol: "B", group: 13, period: 2, block: "p-block" },
      { number: 6, symbol: "C", group: 14, period: 2, block: "p-block" },
      { number: 7, symbol: "N", group: 15, period: 2, block: "p-block" },
      { number: 8, symbol: "O", group: 16, period: 2, block: "p-block" },
      { number: 9, symbol: "F", group: 17, period: 2, block: "p-block" },
      { number: 10, symbol: "Ne", group: 18, period: 2, block: "p-block" },
      
      { number: 11, symbol: "Na", group: 1, period: 3, block: "s-block" },
      { number: 12, symbol: "Mg", group: 2, period: 3, block: "s-block" },
      { number: 13, symbol: "Al", group: 13, period: 3, block: "p-block" },
      { number: 14, symbol: "Si", group: 14, period: 3, block: "p-block" },
      { number: 15, symbol: "P", group: 15, period: 3, block: "p-block" },
      { number: 16, symbol: "S", group: 16, period: 3, block: "p-block" },
      { number: 17, symbol: "Cl", group: 17, period: 3, block: "p-block" },
      { number: 18, symbol: "Ar", group: 18, period: 3, block: "p-block" },
      
      { number: 19, symbol: "K", group: 1, period: 4, block: "s-block" },
      { number: 20, symbol: "Ca", group: 2, period: 4, block: "s-block" },
      { number: 21, symbol: "Sc", group: 3, period: 4, block: "d-block" },
      { number: 22, symbol: "Ti", group: 4, period: 4, block: "d-block" },
      { number: 23, symbol: "V", group: 5, period: 4, block: "d-block" },
      { number: 24, symbol: "Cr", group: 6, period: 4, block: "d-block" },
      { number: 25, symbol: "Mn", group: 7, period: 4, block: "d-block" },
      { number: 26, symbol: "Fe", group: 8, period: 4, block: "d-block" },
      { number: 27, symbol: "Co", group: 9, period: 4, block: "d-block" },
      { number: 28, symbol: "Ni", group: 10, period: 4, block: "d-block" },
      { number: 29, symbol: "Cu", group: 11, period: 4, block: "d-block" },
      { number: 30, symbol: "Zn", group: 12, period: 4, block: "d-block" },
      { number: 31, symbol: "Ga", group: 13, period: 4, block: "p-block" },
      { number: 32, symbol: "Ge", group: 14, period: 4, block: "p-block" },
      { number: 33, symbol: "As", group: 15, period: 4, block: "p-block" },
      { number: 34, symbol: "Se", group: 16, period: 4, block: "p-block" },
      { number: 35, symbol: "Br", group: 17, period: 4, block: "p-block" },
      { number: 36, symbol: "Kr", group: 18, period: 4, block: "p-block" },
      
      { number: 37, symbol: "Rb", group: 1, period: 5, block: "s-block" },
      { number: 38, symbol: "Sr", group: 2, period: 5, block: "s-block" },
      { number: 39, symbol: "Y", group: 3, period: 5, block: "d-block" },
      { number: 40, symbol: "Zr", group: 4, period: 5, block: "d-block" },
      { number: 41, symbol: "Nb", group: 5, period: 5, block: "d-block" },
      { number: 42, symbol: "Mo", group: 6, period: 5, block: "d-block" },
      { number: 43, symbol: "Tc", group: 7, period: 5, block: "d-block" },
      { number: 44, symbol: "Ru", group: 8, period: 5, block: "d-block" },
      { number: 45, symbol: "Rh", group: 9, period: 5, block: "d-block" },
      { number: 46, symbol: "Pd", group: 10, period: 5, block: "d-block" },
      { number: 47, symbol: "Ag", group: 11, period: 5, block: "d-block" },
      { number: 48, symbol: "Cd", group: 12, period: 5, block: "d-block" },
      { number: 49, symbol: "In", group: 13, period: 5, block: "p-block" },
      { number: 50, symbol: "Sn", group: 14, period: 5, block: "p-block" },
      { number: 51, symbol: "Sb", group: 15, period: 5, block: "p-block" },
      { number: 52, symbol: "Te", group: 16, period: 5, block: "p-block" },
      { number: 53, symbol: "I", group: 17, period: 5, block: "p-block" },
      { number: 54, symbol: "Xe", group: 18, period: 5, block: "p-block" },
      
      { number: 55, symbol: "Cs", group: 1, period: 6, block: "s-block" },
      { number: 56, symbol: "Ba", group: 2, period: 6, block: "s-block" },
      { number: 71, symbol: "Lu", group: 3, period: 6, block: "d-block" },
      { number: 72, symbol: "Hf", group: 4, period: 6, block: "d-block" },
      { number: 73, symbol: "Ta", group: 5, period: 6, block: "d-block" },
      { number: 74, symbol: "W", group: 6, period: 6, block: "d-block" },
      { number: 75, symbol: "Re", group: 7, period: 6, block: "d-block" },
      { number: 76, symbol: "Os", group: 8, period: 6, block: "d-block" },
      { number: 77, symbol: "Ir", group: 9, period: 6, block: "d-block" },
      { number: 78, symbol: "Pt", group: 10, period: 6, block: "d-block" },
      { number: 79, symbol: "Au", group: 11, period: 6, block: "d-block" },
      { number: 80, symbol: "Hg", group: 12, period: 6, block: "d-block" },
      { number: 81, symbol: "Tl", group: 13, period: 6, block: "p-block" },
      { number: 82, symbol: "Pb", group: 14, period: 6, block: "p-block" },
      { number: 83, symbol: "Bi", group: 15, period: 6, block: "p-block" },
      { number: 84, symbol: "Po", group: 16, period: 6, block: "p-block" },
      { number: 85, symbol: "At", group: 17, period: 6, block: "p-block" },
      { number: 86, symbol: "Rn", group: 18, period: 6, block: "p-block" },
      
      { number: 87, symbol: "Fr", group: 1, period: 7, block: "s-block" },
      { number: 88, symbol: "Ra", group: 2, period: 7, block: "s-block" },
      { number: 103, symbol: "Lr", group: 3, period: 7, block: "d-block" },
      { number: 104, symbol: "Rf", group: 4, period: 7, block: "d-block" },
      { number: 105, symbol: "Db", group: 5, period: 7, block: "d-block" },
      { number: 106, symbol: "Sg", group: 6, period: 7, block: "d-block" },
      { number: 107, symbol: "Bh", group: 7, period: 7, block: "d-block" },
      { number: 108, symbol: "Hs", group: 8, period: 7, block: "d-block" },
      { number: 109, symbol: "Mt", group: 9, period: 7, block: "d-block" },
      { number: 110, symbol: "Ds", group: 10, period: 7, block: "d-block" },
      { number: 111, symbol: "Rg", group: 11, period: 7, block: "d-block" },
      { number: 112, symbol: "Cn", group: 12, period: 7, block: "d-block" },
      { number: 113, symbol: "Nh", group: 13, period: 7, block: "p-block" },
      { number: 114, symbol: "Fl", group: 14, period: 7, block: "p-block" },
      { number: 115, symbol: "Mc", group: 15, period: 7, block: "p-block" },
      { number: 116, symbol: "Lv", group: 16, period: 7, block: "p-block" },
      { number: 117, symbol: "Ts", group: 17, period: 7, block: "p-block" },
      { number: 118, symbol: "Og", group: 18, period: 7, block: "p-block" },
    ];
    
    const lanthanides = [
      { number: 57, symbol: "La", block: "f-block" },
      { number: 58, symbol: "Ce", block: "f-block" },
      { number: 59, symbol: "Pr", block: "f-block" },
      { number: 60, symbol: "Nd", block: "f-block" },
      { number: 61, symbol: "Pm", block: "f-block" },
      { number: 62, symbol: "Sm", block: "f-block" },
      { number: 63, symbol: "Eu", block: "f-block" },
      { number: 64, symbol: "Gd", block: "f-block" },
      { number: 65, symbol: "Tb", block: "f-block" },
      { number: 66, symbol: "Dy", block: "f-block" },
      { number: 67, symbol: "Ho", block: "f-block" },
      { number: 68, symbol: "Er", block: "f-block" },
      { number: 69, symbol: "Tm", block: "f-block" },
      { number: 70, symbol: "Yb", block: "f-block" },
    ];
    
    const actinides = [
      { number: 89, symbol: "Ac", block: "f-block" },
      { number: 90, symbol: "Th", block: "f-block" },
      { number: 91, symbol: "Pa", block: "f-block" },
      { number: 92, symbol: "U", block: "f-block" },
      { number: 93, symbol: "Np", block: "f-block" },
      { number: 94, symbol: "Pu", block: "f-block" },
      { number: 95, symbol: "Am", block: "f-block" },
      { number: 96, symbol: "Cm", block: "f-block" },
      { number: 97, symbol: "Bk", block: "f-block" },
      { number: 98, symbol: "Cf", block: "f-block" },
      { number: 99, symbol: "Es", block: "f-block" },
      { number: 100, symbol: "Fm", block: "f-block" },
      { number: 101, symbol: "Md", block: "f-block" },
      { number: 102, symbol: "No", block: "f-block" },
    ];
    
    function createPeriodicTable() {
      const table = document.getElementById('periodicTable');
      
      for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
          const cell = document.createElement('div');
          cell.style.gridRow = period;
          cell.style.gridColumn = group;
          
          const element = elements.find(e => e.group === group && e.period === period);
          
          if (element) {
            cell.className = `element ${element.block}`;
            
            const number = document.createElement('span');
            number.className = 'number';
            number.textContent = element.number;
            
            const symbol = document.createElement('span');
            symbol.className = 'symbol';
            symbol.textContent = element.symbol;
            
            cell.appendChild(number);
            cell.appendChild(symbol);
          }
          
          table.appendChild(cell);
        }
      }
      
      const lanthanidesContainer = document.getElementById('lanthanides');
      lanthanides.forEach(element => {
        const cell = document.createElement('div');
        cell.className = `element ${element.block}`;
        
        const number = document.createElement('span');
        number.className = 'number';
        number.textContent = element.number;
        
        const symbol = document.createElement('span');
        symbol.className = 'symbol';
        symbol.textContent = element.symbol;
        
        cell.appendChild(number);
        cell.appendChild(symbol);
        lanthanidesContainer.appendChild(cell);
      });
      
      const actinidesContainer = document.getElementById('actinides');
      actinides.forEach(element => {
        const cell = document.createElement('div');
        cell.className = `element ${element.block}`;
        
        const number = document.createElement('span');
        number.className = 'number';
        number.textContent = element.number;
        
        const symbol = document.createElement('span');
        symbol.className = 'symbol';
        symbol.textContent = element.symbol;
        
        cell.appendChild(number);
        cell.appendChild(symbol);
        actinidesContainer.appendChild(cell);
      });
    }
    
    document.addEventListener('DOMContentLoaded', createPeriodicTable);