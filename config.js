import { Regex } from '@companion-module/base'

export const configFields = [
  {
    type: 'static-text',
    id: 'info',
    width: 12,
    label: 'Information',
    value:
      "<strong>PLEASE READ THIS!</strong> This module is intended for use with IBM Watson for captioning. <br /><br />Use the 'Base URL' field below to define the path to the Watson server for the instance's commands: e.g., 'http://server.url/path/:8000'. <br />The default port appears to be 8000 for remote control commands and port 8080 for web interface.<br /> ",
  },
  {
    type: 'textinput',
    id: 'url',
    label: 'Base URL',
    width: 6,
    default: 'http://example.com',
    regex: Regex.URL,
  },
  {
    type: 'number',
    id: 'pollInterval',
    label: 'Status Poll Interval (seconds)',
    width: 6,
    default: 2,
    min: 1,
    max: 3600,
    regex: Regex.NUMBER,
  },
  {
    type: 'static-text',
    id: 'rejectUnauthorizedInfo',
    width: 12,
    value: `
      <hr />
      <h5>WARNING</h5>
      This module rejects server certificates considered invalid for the following reasons:
      <ul>
        <li>Certificate is expired</li>
        <li>Certificate has the wrong host</li>
        <li>Untrusted root certificate</li>
        <li>Certificate is self-signed</li>
      </ul>
      <p>
        We DO NOT recommend turning off this option. However, if you NEED to connect to a host
        with a self-signed certificate, you will need to set <strong>Unauthorized Certificates</strong>
        to <strong>Accept</strong>.
      </p>
      <p><strong>USE AT YOUR OWN RISK!<strong></p>
    `,
  },
  {
    type: 'dropdown',
    id: 'rejectUnauthorized',
    label: 'Unauthorized Certificates',
    width: 6,
    default: true,
    choices: [
      { id: true, label: 'Reject' },
      { id: false, label: 'Accept - Use at your own risk!' },
    ],
  },
]
