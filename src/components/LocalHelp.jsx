import React, { useEffect, useState } from "react";
import Select from "react-select";

export const LocalHelp = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [contacts, setContacts] = useState([]);
  useEffect(async () => {
    const f = await fetch(
      "https://es02.firstinspires.org/countries/_search?size=3000&source_content_type=application/json&source={%22sort%22:%22country_name.keyword%22}"
    );
    let json = await f.json();
    let _countries = [];
    json.hits.hits.forEach((country) => {
      _countries.push({
        value: country._source.id,
        label: country._source.country_name,
      });
    });
    setCountries(_countries);
    console.log(countries);
  }, []);

  useEffect(async () => {
    console.log(country);
    if (country != "") {
      console.log(
        `https://es02.firstinspires.org/states/_search?size=10000&source_content_type=application/json&source={%22query%22:{%22bool%22:{%22must%22:{%22match%22:{%22fk_list_countries%22:%22${country}%22}}}},%22sort%22:%22stateprov_name.keyword%22}`
      );
      const f = await fetch(
        `https://es02.firstinspires.org/states/_search?size=10000&source_content_type=application/json&source={%22query%22:{%22bool%22:{%22must%22:{%22match%22:{%22fk_list_countries%22:%22${country}%22}}}},%22sort%22:%22stateprov_name.keyword%22}`
      );
      let json = await f.json();
      let _states = [];
      json.hits.hits.forEach((state) => {
        _states.push({
          value: state._source.id,
          label: state._source.stateprov_name,
        });
      });
      setStates(_states);
    }
  }, [country]);

  useEffect(async () => {
    if (state != "") {
      const pf = await fetch(
        `https://es02.firstinspires.org/regions/_search?source_content_type=application/json&source={%22size%22:%2210%22,%22aggs%22:{%22regions%22:{%22terms%22:{%22field%22:%22fk_regions__leafnode%22,%22size%22:%22100%22}}},%22query%22:{%22bool%22:{%22must%22:[{%22match%22:{%22id_list_countries%22:%22${country}%22}},{%22match%22:{%22id_list_stateprovs%22:%22${state}%22}}]}}}`
      );
      let pfjson = await pf.json();
      let aggregations = pfjson.aggregations.regions.buckets;
      let _regions = [];
      aggregations.forEach((region) => {
        _regions.push(region.key);
      });
      console.log(_regions);
      let prefix =
        "https://es02.firstinspires.org/contacts/_search?source_content_type=application/json&size=50&source=";
      let jsond = {
        query: {
          bool: {
            should: [],
          },
        },
        sort: [],
      };
      _regions.forEach((region) => {
        jsond.query.bool.should.push({
          match: {
            id_regions: region,
          },
        });
      });
      prefix += JSON.stringify(jsond);
      console.log(prefix);
      const f = await fetch(prefix);
      let json = await f.json();
      let _contacts = [];
      json.hits.hits.forEach((contact) => {
        console.log(contact._source);
        _contacts.push({
          role: contact._source.assigned_role_title,
          name:
            contact._source.contact_name_first +
            " " +
            contact._source.contact_name_last,
          email: contact._source.contact_email,
          phone: contact._source.contact_phone,
          program: contact._source.region_program_code,
        });
      });
      console.log(_contacts);
      setContacts(_contacts);
      console.log(json);
    }
  }, [state]);

  const countryHandler = (event) => {
    const value = event.value;
    setCountry(value);
  };

  const stateHandler = (event) => {
    const value = event.value;
    setState(value);
  };

  return (
    <div>
      {countries.length > 0 ? (
        <>
          <Select
            options={countries}
            placeholder="Select a country..."
            onChange={(e) => countryHandler(e)}
          />
          <br />
          {states.length > 0 ? (
            <>
              <Select
                options={states}
                placeholder="Select a state..."
                onChange={(e) => stateHandler(e)}
              />
              <br />
              {contacts.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Program</th>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr>
                          <td>{contact.program}</td>
                          <td>{contact.role}</td>
                          <td>{contact.name}</td>
                          <td>
                            <a href={"mailto:" + contact.email}>
                              {contact.email}
                            </a>
                          </td>
                          <td>
                            <a href={"tel:" + contact.phone}>{contact.phone}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>This data comes directly from FIRST.</p>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
