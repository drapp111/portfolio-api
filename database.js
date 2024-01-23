import pg from 'pg'

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
})

const EMAIL_SUBMISSION_QUERY_TEXT = `INSERT INTO public.email_submissions(
	                                  email_to, email_from, subject, message)
	                                  VALUES ($1, $2, $3, $4);`

export async function retrieveReferenceOptions() {
  var options = await pool.query('SELECT ID, REFERENCE_NAME FROM EMAIL_REFERENCE_OPTIONS');
  return options.rows;
}

export async function retrieveImages(request) {
    try {
        var images = await pool.query('SELECT ID, PATH, EXTENSION, ALT, PRIORITY FROM PORTFOLIO_IMAGES WHERE SHOW = (SELECT ID FROM SHOWS WHERE SHOW_NAME = $1) ORDER BY PRIORITY ASC', [request.query.show_name]);
        return images.rows;
    } catch(error) {
        console.log(error);
    }
    
  }

export async function retrievePageText(request) {
    try {
        var page_text = await pool.query('SELECT ID, TITLE, SUBTITLE, DESCRIPTION, IMAGE, DATES, PHOTOGRAPHER, PHOTOGRAPHER_HANDLE, STATUS FROM PORTFOLIO_TEXT WHERE SHOW = (SELECT ID FROM SHOWS WHERE SHOW_NAME = $1)', [request.query.show_name]);
        return page_text.rows;
    } catch(error) {
        console.log(error);
    }
}

export async function retrieveShows() {
    try {
        var shows = await pool.query('SELECT ID, (SELECT SHOW_NAME FROM SHOWS WHERE ID=SHOW) AS SHOW_NAME, TITLE, SUBTITLE, DESCRIPTION, IMAGE, DATES, STATUS, IMAGE_EXTENSION FROM PORTFOLIO_TEXT ORDER BY PRIORITY ASC');
        return shows.rows;
    } catch(error) {
        console.log(error);
    }
}

export async function retrieveStaticParams() {
    try {
        var raw_shows = await pool.query('SELECT SHOW_NAME FROM SHOWS ORDER BY ID ASC');
        var shows = raw_shows.rows;
        var static_params = [];
        for(var idx = 0; idx < shows.rows; idx++) {
            static_params.push({
                show: shows[idx].show_name
            });
        }
        return static_params;
        
    } catch(error) {
        console.log(error);
    }
}

export async function logContactEmail(request) {
  try {
    var email_params = [request.query.to, request.query.from, request.query.subject, request.query.text]
    await pool.query(EMAIL_SUBMISSION_QUERY_TEXT, email_params)
  } catch(error) {
    //write error to log file on server
    console.log(error);
  }
  
}
