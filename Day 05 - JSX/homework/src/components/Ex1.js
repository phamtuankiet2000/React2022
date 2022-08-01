

function Ex1() {
    return (
        <div className="container">

            <script>
                <div className = "result">result</div>
                const students = [
                {
                    company:  "Alfreds Futterkiste",
                    contact: 'Maria Anders',
                    country: 'Germany'
                    },
                {
                    company : 'Centro comercial Moctezuma',
                    contact : 'Francisco Chang',
                    country : 'Mexico'
                },
                {
                    company: 'Ernst Handel',
                    contact : 'Roland Mendel',
                    country : 'Austria'
                },
                {
                    company : 'Island Trading',
                    contact : 'Helen Bennett',
                    country = 'UK'
                },
                {
                    company : 'Laughing Bacchus Winecellars',
                    contact : 'Yoshi Tannamuri',
                    country = 'Canada'
                },
                {
                    company : 'Magazzini Alimentari Riuniti',
                    contact : 'Giovanni Rovelli',
                    country : 'Italy'
                }
                ];

                function printStu(students){
                    let html = "";
                    students.map(
                        student => {
                            html += "company" + student.company + "contact" + student.contact + "country" + student.country;
                        }
                    )
                        result.innerHTML = html;
                }
            </script>
        </div>

    );
}

export default Ex1;