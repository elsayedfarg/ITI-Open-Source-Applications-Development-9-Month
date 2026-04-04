while True:
    file_name = input("Enter file name: ")

    try:
        file = open(file_name, "r")
        print(f"\nContents of {file_name}:")
        for line in file:
            print(line)
        file.close()
        break

    except FileNotFoundError:
        print(f"Error: File '{file_name}' not found.")
        choice = input("Would you like to try again? (y/n): ").lower()
        if choice != "y":
            print("Thanks")
            break

    finally:
        try:
            file.close()
        except:
            #if the file name is not correct
            pass