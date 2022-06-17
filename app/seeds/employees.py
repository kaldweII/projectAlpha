from app.models import db, Employee


# Adds a demo user, you can add other users here if you want
def seed_employees():
    koah = Employee(
        first_name='Koah', last_name='Fish', role='Project Manager', country_code='1', phone_number='(630) 423-4426', email='koah@asarhr.com', availability='Available', address='678 Colonial Dr.', city='Paw Paw', state='Michigan', country="USA", zipcode="44444", employment_start="1/1/2022" )
    db.session.add(koah)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_employees():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!