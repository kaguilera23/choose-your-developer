const helloTeam = function helloTeam (teamData) {
    const a = teamData
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
                                <span id="manager-name" style="background-color: mediumspringgreen;">${a[0].name}</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">${a[0].id}</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">${a[0].email}</span></li>
                            <li class="list-group-item">Office Number: <span style="background-color: white;">${a[0].officeNumber}</span></li>
                        </ul>
                      </div>
                    </div>
                </div>
    
                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                    <div class="card-body">
                        <section >
                            <h5 id="card-title">
                                <span id="manager-name" style="background-color: mediumspringgreen;">${a[1].name}</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">${a[1].id}</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">${a[1].email}</span></li>
                            <li class="list-group-item"><a href="https://github.com/${a[1].github} target="_blank"" style="text-decoration: none;">GitHub: <span style="background-color: white;">${a[1].github}</span></a></li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                <div class="card-body">
                    <section >
                        <h5 id="card-title">
                            <span id="manager-name" style="background-color: mediumspringgreen;">${a[2].name}</span>
                            <span style="background-color: mediumspringgreen;">Manager</span>
                        </h5>                        
                    </section>

                  <div class="card" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">${a[2].id}</span></li>
                        <li class="list-group-item">Email: <span style="background-color: white;">${a[2].email}</span></li>
                        <li class="list-group-item"><a href="https://github.com/${a[2].github}" style="text-decoration: none;">GitHub: <span style="background-color: white;">${a[2].github}</span></a></li>
                        </ul>
                  </div>
                </div>
            </div>
    
                <div class="card m-3" style="width: 22rem; border: white solid 2px;">
                    <div class="card-body">
                        <section >
                            <h5 id="card-title">
                                <span id="manager-name" style="background-color: mediumspringgreen;">${a[3].name}</span>
                                <span style="background-color: mediumspringgreen;">Manager</span>
                            </h5>                        
                        </section>
    
                      <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: <span style="background-color: white;" id = "manager-id">${a[3].id}</span></li>
                            <li class="list-group-item">Email: <span style="background-color: white;">${a[3].email}</span></li>
                            <li class="list-group-item">School: <span style="background-color: white;">${a[3].school}</span></li>
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