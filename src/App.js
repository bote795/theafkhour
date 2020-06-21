import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Container className="App-body">
      <div className="center-body">
        <Row>
          <Col>
            <section>
              <div className="podcast-custom-info">
                <Row className="flex-column">
                  <Col>
                    <img
                      src="https://pbcdn1.podbean.com/imglogo/image-logo/8647312/The_AFK_Hour_a0yxt.png"
                      className="podcast-logo"
                      alt="logo"
                    />
                  </Col>
                  <Col>
                    <h1 className="podcast-title">The AFK Hour</h1>
                  </Col>
                  <Col>
                    <div className="podcast-descreption">
                      <p>
                        The AFK Hour is brought to you by SavePoint. This
                        podcast series dives into multiple topics revolving
                        around gaming, lifestyle and friendship. It asks
                        hardcore casual gamers about their opinions on anything
                        and everything. No two podcasts will be the same. New
                        episodes every Wednesday!
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <h4>Listen On</h4>
                    <ul className="podcast-listenOn">
                      <li>
                        <a href="https://podcasts.apple.com/us/podcast/the-afk-hour/id1516666092">
                          <FontAwesomeIcon icon={["fab", "apple"]} />
                        </a>
                      </li>
                      <li>
                        <a href="https://open.spotify.com/show/0i4yj0045z6WP1UccdudSN">
                          <FontAwesomeIcon icon={["fab", "spotify"]} />
                        </a>
                      </li>
                      <li>
                        <a href="https://savepointmain.podbean.com">
                          <FontAwesomeIcon icon="rss" />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <Row className="flex-column">
                <Col>
                  <h2 className="latest-eps-title">Latest Episodes</h2>
                  <iframe
                    title="The AFK Hour"
                    id="multi_iframe"
                    src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F8647312%2Fplaylist_multi.xml&vjs=1&kdsowie31j4k1jlf913=0be4f2ac9e81a70d23d11d78a768e4a28e57bf8e&size=430&skin=7&episode_list_bg=%23ffffff&bg_left=%233f96f8&bg_mid=%233f96f8&bg_right=%233f96f8&podcast_title_color=%23ffc90e&episode_title_color=%23ffffff&auto=0&download=1&show_playlist_recent_number=10&pbad=1"
                    frameborder="0"
                    scrolling="no"
                    width="100%"
                    height="432"
                    allowfullscreen=""
                  ></iframe>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
