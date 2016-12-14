$(document).ready(function() {

			var people, 
            asc1 = 1,
            asc2 = 1,
            asc3 = 1,
            asc4 = 1,
            asc5 = 1;

            $.ajax({
                type: 'GET',
                url: "http://localhost/scoresboard/Scoresboard.xml",
            }).done(function (data) {
                var obj = $.parseXML(data);
                obj.Scoresboard.Score.sort(function (a, b) {
                    return parseFloat(b.PScore) - parseFloat(a.PScore);
                });

                var cpt = 0;
                while (cpt < obj.Scoresboard.Score.length) {
                    $('#ScoresboardTable').append("<tr><td><b>" + (obj.Scoresboard.Score[cpt].Rank) + '</b></td><th><a target="_blank" href="' + obj.Scoresboard.Score[cpt].Twitch + '">' + obj.Scoresboard.Score[cpt].Player + '</a></th><td class="hidden-xs"><b>' + obj.Scoresboard.Score[cpt].Country + "</b></td><td><b>" + obj.Scoresboard.Score[cpt].PScore + '</b></td><td class="hidden-xs"><b>' + obj.Scoresboard.Score[cpt].NRace + "</b></td></tr>");
                    cpt++;
                }
                people = document.getElementById("ScoresboardTable");

            }).fail(function (jqXHR, textStatus, errorThrown) { });

            function sort_table(tbody, col, asc, number) {
                var rows = tbody.rows,
                    rlen = rows.length,
                    arr = new Array(),
                    i, j, cells, clen;
                // fill the array with values from the table
                for (i = 0; i < rlen; i++) {
                    cells = rows[i].cells;
                    clen = cells.length;
                    arr[i] = new Array();
                    for (j = 0; j < clen; j++) {
                        arr[i][j] = cells[j].innerText;
                    }
                }
                if (!number){
                    // sort the array by the specified column number (col) and order (asc)
                    arr.sort(function (a, b) {
                        return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1 * asc);
                    });
                }
                else{
                    // sort the array by the specified column number (col) and order (asc)
                    arr.sort(function (a, b) {
                        return (parseInt(a[col]) == parseInt(b[col])) ? 0 : ((parseInt(a[col]) > parseInt(b[col])) ? asc : -1 * asc);
                    });
                }

                var myMap = new Map();

                for (cpt = 0; cpt < rlen; cpt++) {
                    for (v = 0; v < rlen; v++){
                        if (rows[cpt].cells[1].innerText === arr[v][1]) {
                            var temp = rows[cpt].cells[1].innerHTML
                            myMap.set(v, temp);
                        }
                    }
                }
                // replace existing rows with new rows created from the sorted array
                for (i = 0; i < rlen; i++) {
                    rows[i].innerHTML = "<td><b>" + arr[i][0] + '</b></td><th>' + myMap.get(i) + '</th><td class="hidden-xs"><b>' + arr[i][2] + "</b></td><td><b>" + arr[i][3] + '</b></td><td class="hidden-xs"><b>' + arr[i][4] + "</b></td>";
                }
            }
});