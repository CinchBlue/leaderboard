PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.events({
    'click .player': function() {
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });

  Template.leaderboard.helpers({
    'player': function() {
      return PlayersList.find();
    },
    'selectedClass': function() {
      let playerId = this._id;
      let selectedPlayer = Session.get('selectedPlayer');
      if (playerId == selectedPlayer) {
        return 'selected';
      }
    }
  });
}

if (Meteor.isServer) {
  console.log('Hello server');
}
