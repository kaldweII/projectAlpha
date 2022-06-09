from app.models import db, Customers


# Adds a demo user, you can add other users here if you want
def seed_customers():
    asar = Customer(
        name='ASAR Digital', alias='Alpha', address='55 Shuman Blvd Suite #525', city='Naperville', city='Illinois', country='USA', zipcode='60563', country_code='1', primary_phone='(630) 423-5926', site_link='https://www.asardigital.com/', industry='Software', main_contact_id='3' )
    db.session.add(asar)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_customers():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!