const helloTeam = function helloTeam (teamData) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Your Team Members</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./src/style.css">
    
        </head>
    
        <body>
            <section id = "title">
                <p style="background-color: pink">
                    My Team
                </p>            
            </section>
    
    
            <section class="row justify-content-center" id = "employee-section">
    
                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                    <div class="card-body">
                        <section >
                            <h5 id="card-title">
                                <span id="manager-name" style="background-color: mediumspringgreen;"> Kayla Aguilera</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">Hello</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">Hello</span></li>
                            <li class="list-group-item">Office Number: <span style="background-color: white;">Hello</span></li>
                        </ul>
                      </div>
                    </div>
                </div>
    
                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                    <div class="card-body">
                        <section >
                            <h5 id="card-title">
                                <span id="manager-name" style="background-color: mediumspringgreen;">Kyle Feener</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">Hello</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">Hello</span></li>
                            <li class="list-group-item">GitHub: <span style="background-color: white;">Hello</span></li>
                        </ul>
                      </div>
                    </div>
                </div>
    
                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                    <div class="card-body">
                        <section >
                            <h5 id="card-title">
                                <span id="manager-name" style="background-color: mediumspringgreen;">Sugar and Titus</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">Hello</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">Hello</span></li>
                            <li class="list-group-item">School: <span style="background-color: white;">Hello</span></li>
                        </ul>
                      </div>
                    </div>
                </div>
    
            </section>
            
        </body>
    </html>    
    `
}

module.exports = helloTeam;