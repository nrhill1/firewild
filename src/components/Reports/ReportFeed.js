import React, { Component } from 'react'
import Report from './Report.js'


const API_URL = 'http://127.0.0.1:5000/'

class ReportFeed extends Component {
    constructor(props) {
        super(props)

        this.state ={
            reports: [],
        }
    }

    componentDidMount(){
        fetch(`${API_URL}/reports`)
            .then(response => response.json())
            .then(data => {
                console.log(data.result)
                this.setState({ reports: data.result })
                console.log(this.state.reports)
            })
    }
    

    render() {
        let reportList = this.state.reports.map((report) =>{
            return(
                <Report 
                    username = {report.username}
                    text = {report.text}
                    location = {report.location}
                    reportid = {report.reportid}
                />
            )
        })
        return(
            <div className="reportFeed">
                <h3>Report Feed</h3>
                { this.state.reports.length 
                    ? reportList 
                    : "Loading..." }
            </div>
        )
    }
}

export default ReportFeed;