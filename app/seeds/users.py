from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    alpha = User(
        username='alpha', email='alpha@asarhr.com', password='wolf')
    kreston = User(
        username='kreston', email='kreston@asarhr.com', password='alpha')
    maj = User(
        username='maj', email='maj@asarhr.com', password='alpha')

    db.session.add(alpha)
    db.session.add(kreston)
    db.session.add(maj)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!