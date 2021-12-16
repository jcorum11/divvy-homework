import { createStore } from 'vuex'

export const store = createStore({
  state: {
    parsedData: []
  },
  mutations: {
    pushData(state, row) {
      state.parsedData.push(row)
    },
    overwriteData(state, data) {
      state.parsedData = data
    },
    updateData(state, editedRow) {
      state.parsedData.forEach((row, index) => {
        if (editedRow.id === row.id) {
          state.parsedData.splice(index, 1, editedRow)
        }
      })
    },
    deleteData(state, deletedId) {
      state.parsedData.forEach((row, index) => {
        if (deletedId === row.id) {
          state.parsedData.splice(index, 1)
        }
      })
    },
    romanizeData(state) {
      function romanize(num) {
        let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
      }
      state.parsedData.forEach((row) => {
        row.id = romanize(row.id)
      })
    }
  }
})