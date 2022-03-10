import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
function index(req, res) {
  User.findById(req.user._id)
    .populate('profile')
    .then(user => {
      res.render('dashboards/index', {
        title: 'dashboard',
        profile: user.profile
      })
    })
}

function analytics(req, res) {
  Profile.findById(req.params.id)
    .populate('shoesListed')
    .then(profile => {
      res.render('dashboards/analytics', {
        title: 'My Analytics',
        profile
      })
    })
}

export {
  index,
  analytics
}
