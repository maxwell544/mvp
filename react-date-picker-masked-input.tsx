<ReactDatePicker
                selected={
                  new Date(
                    moment(data.user.profile.birthday).format('MM/DD/YYYY')
                  )
                }
                onChange={(date: Date) =>
                  setData({
                    ...data,
                    user: {
                      ...data.user,
                      profile: { ...data.user.profile, birthday: date },
                    },
                  })
                }
                wrapperClassName="w-full"
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/dd/yyyy"
                className={clsx(
                  'w-full',
                  'mt-2',
                  'px-1 py-1.5',
                  'rounded-md',
                  'border-black'
                )}
                customInput={
                  <MaskedInput
                    type="text"
                    mask={[
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                }
              />