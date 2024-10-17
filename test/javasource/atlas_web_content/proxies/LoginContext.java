// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package atlas_web_content.proxies;

public class LoginContext implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject loginContextMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "Atlas_Web_Content.LoginContext";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Username("Username"),
		Password("Password"),
		RememberMe("RememberMe"),
		ValidationMessage("ValidationMessage");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public LoginContext(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected LoginContext(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject loginContextMendixObject)
	{
		if (loginContextMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, loginContextMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.loginContextMendixObject = loginContextMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static atlas_web_content.proxies.LoginContext initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new atlas_web_content.proxies.LoginContext(context, mendixObject);
	}

	public static atlas_web_content.proxies.LoginContext load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return atlas_web_content.proxies.LoginContext.initialize(context, mendixObject);
	}

	public static java.util.List<atlas_web_content.proxies.LoginContext> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> atlas_web_content.proxies.LoginContext.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Username
	 */
	public final java.lang.String getUsername()
	{
		return getUsername(getContext());
	}

	/**
	 * @param context
	 * @return value of Username
	 */
	public final java.lang.String getUsername(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Username.toString());
	}

	/**
	 * Set value of Username
	 * @param username
	 */
	public final void setUsername(java.lang.String username)
	{
		setUsername(getContext(), username);
	}

	/**
	 * Set value of Username
	 * @param context
	 * @param username
	 */
	public final void setUsername(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String username)
	{
		getMendixObject().setValue(context, MemberNames.Username.toString(), username);
	}

	/**
	 * @return value of Password
	 */
	public final java.lang.String getPassword()
	{
		return getPassword(getContext());
	}

	/**
	 * @param context
	 * @return value of Password
	 */
	public final java.lang.String getPassword(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Password.toString());
	}

	/**
	 * Set value of Password
	 * @param password
	 */
	public final void setPassword(java.lang.String password)
	{
		setPassword(getContext(), password);
	}

	/**
	 * Set value of Password
	 * @param context
	 * @param password
	 */
	public final void setPassword(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String password)
	{
		getMendixObject().setValue(context, MemberNames.Password.toString(), password);
	}

	/**
	 * @return value of RememberMe
	 */
	public final java.lang.Boolean getRememberMe()
	{
		return getRememberMe(getContext());
	}

	/**
	 * @param context
	 * @return value of RememberMe
	 */
	public final java.lang.Boolean getRememberMe(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.RememberMe.toString());
	}

	/**
	 * Set value of RememberMe
	 * @param rememberme
	 */
	public final void setRememberMe(java.lang.Boolean rememberme)
	{
		setRememberMe(getContext(), rememberme);
	}

	/**
	 * Set value of RememberMe
	 * @param context
	 * @param rememberme
	 */
	public final void setRememberMe(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean rememberme)
	{
		getMendixObject().setValue(context, MemberNames.RememberMe.toString(), rememberme);
	}

	/**
	 * @return value of ValidationMessage
	 */
	public final java.lang.String getValidationMessage()
	{
		return getValidationMessage(getContext());
	}

	/**
	 * @param context
	 * @return value of ValidationMessage
	 */
	public final java.lang.String getValidationMessage(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.ValidationMessage.toString());
	}

	/**
	 * Set value of ValidationMessage
	 * @param validationmessage
	 */
	public final void setValidationMessage(java.lang.String validationmessage)
	{
		setValidationMessage(getContext(), validationmessage);
	}

	/**
	 * Set value of ValidationMessage
	 * @param context
	 * @param validationmessage
	 */
	public final void setValidationMessage(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String validationmessage)
	{
		getMendixObject().setValue(context, MemberNames.ValidationMessage.toString(), validationmessage);
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return loginContextMendixObject;
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final atlas_web_content.proxies.LoginContext that = (atlas_web_content.proxies.LoginContext) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

  /**
   * Gives full name ("Module.Entity" name) of the type of the entity.
   *
   * @return the name
   */
	public static java.lang.String getType()
	{
		return entityName;
	}
}
