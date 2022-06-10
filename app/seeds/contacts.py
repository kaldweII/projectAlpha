from app.models import db, Contact


# Adds a demo user, you can add other users here if you want
def seed_contacts():
    kreston = Contact(
        first_name='Kreston', last_name='Caldwell', email='kreston@asarhr.com', gender='Male', title='Mr.', country_code='1', mobile_phone_number='(630) 870-5588', linkedin_url='https://www.linkedin.com/in/krestoncaldwell/')
    maj = Contact(
        first_name='Maj', last_name='Kravos', email='maj@asarhr.com', gender='Male', title='Mr.', country_code='1', mobile_phone_number='(815) 608-2197', linkedin_url='https://www.linkedin.com/in/majkravos/')
    sanjjeev = Contact(
        first_name='Sanjjeev', last_name='Singh', email='sanjjeev@asarhr.com', gender='Male', title='Mr.', country_code='1', mobile_phone_number='(630) 423-5926', linkedin_url='https://www.linkedin.com/in/sanjjeevksingh/')
    db.session.add(kreston)
    db.session.add(maj)
    db.session.add(sanjjeev)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_contacts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!