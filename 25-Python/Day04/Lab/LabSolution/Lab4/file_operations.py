def validate_name_or_track(value, field):
    if not all(char.isalpha() or char.isspace() for char in value):
        # value can not be casted (ValueError)
        raise ValueError(f"{field} must contain only letters and spaces.")
    return value


def validate_age(age_input):
    try:
        age = int(age_input)
    except ValueError:
        raise ValueError("Age must be an integer.")

    if age <= 0:
        raise ValueError("Age must be positive.")
    if age < 20:
        raise Exception("Age must be at least 20.")

    return age


def validate_email(email):
    if "@" not in email or "." not in email:
        raise ValueError("Invalid email format.")
    return email


try:
    name = input("Enter name: ")
    age_input = input("Enter age: ")
    email = input("Enter email: ")
    track = input("Enter track: ")

    name = validate_name_or_track(name, "Name")
    track = validate_name_or_track(track, "Track")
    age = validate_age(age_input)
    email = validate_email(email)

    try:
        file = open("users.txt", "a")
    except Exception as e:
        print(f"Error: {e}")
    else:
        file.write(f"Name: {name}, Age: {age}, Email: {email}, Track: {track}\n")
        print("Data added successfully")
    finally:
        file.close()

    try:
        file = open("users.txt", "r")
    except FileNotFoundError:
        print("Error: File not found.")
    else:
        lines = file.readlines()

        print("\nupper case file")
        word_count = 0

        for line in lines:
            print(line.upper())
            word_count += len(line.split())

        print("\nTotal number of words:", word_count)

    finally:
        file.close()

except Exception as e:
    print(f"Custom Error: {e}")