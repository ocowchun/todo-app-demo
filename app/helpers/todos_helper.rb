module TodosHelper
  def active_todo_nav
    nav="all"
    if params[:filter].present?
      nav="active" if params[:filter]=="active"
      nav="completed" if params[:filter]=="completed"
    end
    nav
  end
end
