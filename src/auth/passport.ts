import passport from 'passport'
import passportJwt from 'passport-jwt'
import User from '../models/user'

const ExtractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      const user = await User.findOne({ where: { id: jwtPayload.id } })

      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    },
  ),
)
