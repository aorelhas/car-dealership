import React, { Component } from 'react';

export default class FeaturedCar extends Component {
  // static contextType = RoomContext;

  render() {
    // let { loading, featuredRooms: rooms } = this.context;

    // rooms = rooms.map((room) => {
    //   return <Room key={room.id} room={room} />;
    // });

    return (
      <section className="featured-rooms">
        {/* <Title title="featured rooms" /> */}
        <div className="featured-rooms-center">
          {/* {loading ? <Loading /> : rooms} */}
        </div>
      </section>
    );
  }
}
